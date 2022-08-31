module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: 'Digital Designer & Full Stack Developer',
    },
    plugins: [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `latest-work`,
                path: `${__dirname}/latest-work`,
            },
        },
        'gatsby-plugin-mdx',
    ],
};
