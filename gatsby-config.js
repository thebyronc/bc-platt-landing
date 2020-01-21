module.exports = {
  assetPrefix: `http://byronchang.com/plattpublished`,
  siteMetadata: {
    title: `Byron Chang - Code Challenge - Platt`,
    description: `Using React, Gatsby, and Styled Components to build out a landing page.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/img/ic_platt-u.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "DOGCEO",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "dogceo",
    //     // Url to query from
    //     url: "https://dog.ceo/api/breeds/list/all",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
