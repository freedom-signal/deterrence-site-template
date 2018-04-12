let activeEnv = process.env.ACTIVE_ENV;

if (!activeEnv) {
  activeEnv = 'default';
}

require('dotenv').config({
  path: `environments/.env.${activeEnv}`
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
  ]
};
