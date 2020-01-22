# Seattle Against Slavery's Deterrence Website Generator

A static site generator for our deterrence websites build on [Gatsby.js](https://www.gatsbyjs.org)

## Run locally

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

Install dependencies:

```sh
npm install
```

Run it locally with hot reloading:

```sh
gatsby develop
```

Your site will be visible at `localhost:8000`

## Test on a phone

You can’t run a hot reloading environment on a phone, but you can serve your built site and access that on your phone. You’ll need to do these steps (and redo them if you change something):

1. Run `gatsby build`
2. Run `gatsby serve`
3. Go to the “on your network” address on your phone, while connected to the same WiFi as the computer that is serving the page. This address stays the same over time, at least as long as you’re using the same computer and WiFi connection.

See Gatsby docs under “Using the Gatsby CLI”: https://www.gatsbyjs.org/docs/

## Adding Custom Data

Custom data is managed through the `gatsby-config` file and by passing in a command line flag for `REGION`. There is an example file for the regional data in the `regional_config` folder. You can use this `.env.example` file for local development.

New regions are added by making a duplicate of the `.env.example` file in the `regional_config` folder and renaming it to `.env.NEW_REGION_NAME`. Then you can replace the contents with the values for your region.

Some sites require small customizations. These are found on branches that correspond to the `.env` file region name. Switch to these branches & ensure they have the latest changes from master before working on that specific deterrence site.

Stop gatsby and restart with your new region environment by running: `REGION=NEW_REGION_NAME gatsby develop`. You will need to restart whenever you switch regions or when you make changes to your env file.

_Note: for privacy reasons, we do not keep regional data in this repository. Please ask for access to the private repo where we store the regional config files if needed._

## Deploying

We use github pages to host our site. Follow the instructions here: https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/

When you are ready to deploy, run npm run deploy.
