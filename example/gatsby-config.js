const trackingId = "UA-51024599-1"
const anonymize = true

module.exports = {
  siteMetadata: {
    lang: "ja",
    title: `title`,
    description: `description`,
    name: "name",
    profile: "profile",
    consent: {
      text: "このウェブサイトでは Cookie を使用します。<a href='/privacy/'>詳細はこちら</a>",
      accept: "同意する",
      decline: "同意しない",
    },
    siteUrl: `https://blog.5000164.jp`,
    image: `/icon.png`,
    twitterUsername: `@5000164`,
    repository: `https://github.com/5000164/blog.5000164.jp`,
    profileUrl: `https://5000164.jp`,
    trackingId,
    anonymize,
  },
  plugins: [
    {
      resolve: "theme",
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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId,
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize,
        },
        facebookPixel: {
          pixelId: "",
          cookieName: "gatsby-gdpr-facebook-pixel",
        },
        environments: ["production", "development"],
      },
    },
  ],
}
