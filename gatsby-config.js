let regionalConfig = process.env.REGION;

if (!regionalConfig) {
  regionalConfig = 'default';
}

require('dotenv').config({
  path: `regional_config/.env.${regionalConfig}`
});

module.exports = {
  siteMetadata: {
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    jail_time: process.env.JAIL_TIME,
    fine: process.env.FINE,
    sex_offender_registry: process.env.SEX_OFFENDER_REGISTRY,
    contact_website: process.env.CONTACT_WEBSITE,
    contact_url: process.env.CONTACT_URL,
    contact_phone: process.env.CONTACT_PHONE,
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
