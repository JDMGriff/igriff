import * as React from 'react';
import { graphql } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = ({ data, children }) => {
    // const image = getImage(data.mdx.frontmatter.hero_image);
    return (
        <div>
            <Layout>
                <div className='latest-work-item'>
                    <div className='latest-work-item__hero'>
                        <h1>{data.mdx.frontmatter.title}</h1>
                        <div className='latest-work-item__hero--details'>
                            <p>
                                Created in:
                                <span className='xd-icon'>
                                    {data.mdx.frontmatter.created_in}
                                </span>
                            </p>
                            <p>
                                Status: <span className='live-status'></span>
                                {data.mdx.frontmatter.status}
                            </p>
                        </div>
                    </div>

                    {/* <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
                /> */}
                </div>
            </Layout>
            <div className='job-summary'>
                <div className='container'>{children}</div>
            </div>
        </div>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                created_in
                status
                date(formatString: "MMMM DD, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
