module.exports = {
  siteMetadata: {
    title: `Awwwards Furrow Studio Website`,
    description: `Awwwards Furrow Website rebuilt with Gatsby, Framer Motion and Styled Components.`,
    author: `Francis Lagares`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Awwwards Furrow Studio Website`,
        short_name: `Awwwards Furrow Studio Website`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `public/icons/favicon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
