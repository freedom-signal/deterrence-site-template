import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import styles from './layout.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div className={styles.outerWrapper}>
        <div className={styles.wrapper}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              {
                name: 'keywords',
                content:
                  'escorts, prostitution, hobby guide, stop buying, vice',
              },
            ]}
          />

          <Header />

          <div className={styles.innerContainer}>{children}</div>

          <Footer />
        </div>
      </div>
    )}
  />
)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
