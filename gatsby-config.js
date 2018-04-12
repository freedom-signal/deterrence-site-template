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
