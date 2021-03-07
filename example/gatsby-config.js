module.exports = {
  siteMetadata: {
    lang: `ja`,
    title: `title`,
    description: `description`,
    name: `name`,
    profile: `profile`,
    siteUrl: `https://blog.5000164.jp`,
    image: `/icon.png`,
    twitterUsername: `@5000164`,
    repository: `https://github.com/5000164/blog.5000164.jp`,
    profileUrl: `https://5000164.jp`,
  },
  plugins: [
    {
      resolve: `theme`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `5000164 is here`,
        short_name: `5000164 is here`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blog.5000164.jp`,
      },
    },
  ],
}
