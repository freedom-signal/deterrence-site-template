let regionalConfig = process.env.REGION;

if (!regionalConfig) {
  regionalConfig = 'default';
}

require('dotenv').config({
  path: `${__dirname}/regional_config/.env.${regionalConfig}`
});

module.exports = {
  siteMetadata: {
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    jail_time: process.env.JAIL_TIME,
    fine: process.env.FINE,
    sex_offender_registry: process.env.SEX_OFFENDER_REGISTRY,
    alternatives_website: process.env.ALTERNATIVES_WEBSITE,
    alternatives_url: process.env.ALTERNATIVES_URL,
    alternatives_phone: process.env.ALTERNATIVES_PHONE,
    contact_webhook: process.env.CONTACT_WEBHOOK
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images/`
      }
    },
  ]
};
