// Step 1: Import React
import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

// Step 2: Define your component
const IndexPage = ({ data }) => {
    return (
        <Layout pageTitle='Home Page'>
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage alt='image' src='../images/game-over.jpg' />

            {/* Include latest blogs - refactor to be component */}
            <h2>Blog Posts</h2>
            {data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/blog/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                }
                id
            }
        }
    }
`;

export const Head = () => (
    <>
        <Seo title='Home Page' />
        <meta name='Home Page' content='home page' />
    </>
);

// Step 3: Export your component
export default IndexPage;
