module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: 'Ian Griffiths - Full Stack Developer',
    },
    plugins: [
        'gatsby-plugin-sharp',
        "gatsby-transformer-sharp",                
        'gatsby-plugin-image',
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        'gatsby-plugin-mdx',
    ],
};
