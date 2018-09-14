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

Custom data is managed through the `gatsby-config` file and by passing in a command line flag for `REGION`.

To add a new region, make a duplicate of the `.env.default` file in the `regional_config` folder and rename it to `.env.NEW_REGION_NAME`. Then replace the contents with the values for your region.

Stop gatsby and restart with your new region environment by running: `REGION=NEW_REGION_NAME gatsby develop`. You will need to restart whenever you switch regions or when you make changes to your env file.

## Deploying

:rotating_light: not yet implemented :rotating_light:

# To do:

* [x] Implement CSS Grid for homepage
* [x] Find content images
* [x] Learn how to use a data file to pull data for different components
* [x] Image optimization
* [x] Harm page content
* [x] Alternatives page content
* [ ] Set up zapier webhook for emails (for contact page)
* [x] Contact page content
* [x] Create mobile menu
* [x] Menu should highlight the current page
* [ ] Implement CSS Grid / flexbox layouts on all pages
* [ ] Back to top link after scrolling on mobile
* [x] Update `package.json` name, description, author, etc.
* [ ] Set up config to generate the site into a new folder specifying a config file
* [ ] Develop deployment strategy
* [ ] Accessibility audit
  * increase contrast in header
* [ ] Performance audit
* [ ] Update readme
