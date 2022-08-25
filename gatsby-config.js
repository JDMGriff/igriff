module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: 'Ian Griffiths - Full Stack Developer',
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
    ],
};
