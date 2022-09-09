import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogList = () => {
    const data = useStaticQuery(graphql`
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
    `);
    return (
        <div>
            {data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/latest-work/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))}
        </div>
    );
};

export default BlogList;
