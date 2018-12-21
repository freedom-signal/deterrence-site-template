import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import styles from './consequences.module.scss'
import sharedStyles from '../assets/shared-styles/shared.module.scss'

export default ({ data }) => (
  <Layout>
    <div>
      <Img
        alt="Text overlay that reads: It's not worth ruining your future. Background image of a man in the backseat of a police car."
        fluid={data.arrestedImage.childImageSharp.fluid}
      />
      <div className={sharedStyles.pageWrapper}>
        <h3 className={styles.riskBuying}>
          Are you willing to risk the consequences of buying sex?
        </h3>
        <div className={sharedStyles.dividerLine} />
        <p className={styles.offenderRegistry}>
          You might end up on the {data.site.siteMetadata.sex_offender_registry}
        </p>
        
        <Img
          alt="Text overlay that reads: I can't go to my kid's birthday because I'm a registered sex offender. Background image of a child blowing out some candles."
          fluid={data.childImage.childImageSharp.fluid}
        />
        <p className={styles.getArrested}>
          Get arrested and you could spend up to{' '}
          {data.site.siteMetadata.jail_time} in jail
        </p>
        
        <Img
          alt="Text overlay that reads: My whole world came crashing down, and I felt like I wanted to die. Background image of a man standing in a jail cell."
          fluid={data.jailImage.childImageSharp.fluid}
        />
        <p className={styles.payFines}>
          You might pay up to {data.site.siteMetadata.fine} in fines, but you
          could lose much more than that
        </p>
        
        <Img
          alt="Text overlay that reads: I used to be my daughter's favorite, now she won't even look at me. Background image of a mother consoling her crying daughter."
          fluid={data.daughterImage.childImageSharp.fluid}
        />
        <p className={styles.loseJob}>
          You could become a liability to your company and lose your job
        </p>
        
        <Img
          alt="Text overlay that reads: They said someone in h.r. saw my mugshot on the news. Background image of a man sitting at the bar."
          fluid={data.newsImage.childImageSharp.fluid}
        />
        <p className={styles.rethinkBuying}>
          Ready to rethink buying sex? There is help available for you now.
        </p>
        
        <a href="/alternatives" className="arrow-redirect">
          <Img
            alt="Image of an ellipse circle with an arrow within it"
            fluid={data.arrowImage.childImageSharp.fluid}
          />
        </a>
        
        <a>
          <p className={styles.readLaws}>read the laws here</p>
        </a>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query ConsequencesQuery {
    site {
      siteMetadata {
        jail_time
        fine
        sex_offender_registry
      }
    }

    arrestedImage: file(relativePath: { eq: "consequences1-arrested.png" }) {
      ...fluidImage
    }  
    childImage: file(relativePath: { eq: "consequences2-sex-offender.png" }) {
      ...fluidImage
    } 
    jailImage: file(relativePath: { eq: "consequences3-jail.png" }) {
      ...fluidImage
    } 
    daughterImage: file(relativePath: { eq: "consequences4-daughter.png" }) {
      ...fluidImage
    } 
    newsImage: file(relativePath: { eq: "consequences5-on-the-news.png" }) {
      ...fluidImage
    }   
    arrowImage: file(relativePath: { eq: "arrow.png" }) {
      ...fluidImage
    }   
  }
`