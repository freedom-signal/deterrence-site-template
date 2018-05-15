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

## Adding Custom Data
Custom data is managed through the `gatsby-config` file and by passing in a command line flag for `REGION`. 

To add a new region, make a duplicate of the `.env.default` file in the `regional_config` folder and rename it to `.env.NEW_REGION_NAME`. Then replace the contents with the values for your region. 

Stop gatsby and restart with your new region environment by running: `REGION=NEW_REGION_NAME gatsby develop`. You will need to restart whenever you switch regions or when you make changes to your env file.

## Deploying
:rotating_light: not yet implemented :rotating_light:


# To do:
- [x] Implement CSS Grid for homepage
- [x] Find content images
- [x] Learn how to use a data file to pull data for different components
- [ ] Image optimization
- [ ] Harm page content 
- [ ] Alternatives page content 
- [ ] Set up zapier webhook for emails (for contact page)
- [ ] Contact page content
- [ ] Create mobile menu
- [ ] Implement CSS Grid / flexbox layouts on all pages
- [ ] Back to top link after scrolling on mobile
- [x] Update `package.json` name, description, author, etc.
- [ ] Set up config to generate the site into a new folder specifying a config file
- [ ] Develop deployment strategy
- [ ] Accessibility audit
  * increase contrast in header
- [ ] Performance audit
- [ ] Update readme
