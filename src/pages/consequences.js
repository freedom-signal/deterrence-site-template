import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

import styles from './consequences.module.scss';
import sharedStyles from '../assets/shared-styles/shared.module.scss';


const ConsequencesPage = ({ data }) => (
  <div>
    <Img 
      alt="Text overlay that reads: It's not worth ruining your future. Background image of a man in the backseat of a police car."
      sizes={data.arrestedImage.sizes}
    />  
    <div className={sharedStyles.pageWrapper}>
        <p>Are you willing to risk the consequences of buying sex?</p>
        <div className={sharedStyles.dividerLine}></div>
        <h3>You might end up on the Sex Offender Registry</h3>
        <Img
          alt="Text overlay that reads: I can't go to my kid's birthday because I'm a registered sex offender. Background image of a child blowing out some candles."
          sizes={data.childImage.sizes}  
        />
        <h3>Get arrested and you could spend up to 27 months in jail</h3>
        <Img
          alt="Text overlay that reads: My whole world came crashing down, and I felt like I wanted to die. Background image of a man standing in a jail cell."  
          sizes={data.jailImage.sizes}
          />
        <h3>You might pay up to $5,000 in fines, but you could lose much more than that</h3>  
          <Img
            alt="Text overlay that reads: I used to be my daughter's favorite, now she won't even look at me. Background image of a mother consoling her crying daughter."
            sizes={data.daughterImage.sizes}
          />
        <h3>You could become a liability to your company and lose your job</h3>
          <Img
            alt="Text overlay that reads: They said someone in h.r. saw my mugshot on the news. Background image of a man sitting at the bar."
            sizes={data.newsImage.sizes}
          />
        <h4>Ready to rethink buying sex? There is help available for you now.</h4>
          <a href="/"><Img 
            alt="Image of an ellipse circle with an arrow within it"
            sizes={data.arrowImage.sizes}
          /></a>
        <p>read the laws here</p>
        </div>
    </div>  
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
    arrestedImage: imageSharp(id: {regex: "/consequences1-arrested/"}){
      sizes(maxWidth: 1240){
        ...GatsbyImageSharpSizes
      }
    }
    childImage: imageSharp(id: {regex: "/consequences2-sex-offender/"}){
      sizes(maxWidth: 1240){
        ...GatsbyImageSharpSizes
      }
    }
    jailImage: imageSharp(id: {regex: "/consequences3-jail/"}){
      sizes(maxWidth: 1240){
        ...GatsbyImageSharpSizes
      }
    }
    daughterImage: imageSharp(id: {regex: "/consequences4-daughter/"}){
      sizes(maxWidth: 1240){
        ...GatsbyImageSharpSizes
      }
    }
    newsImage: imageSharp(id: {regex: "/consequences5-on-the-news/"}){
      sizes(maxWidth: 1240){
        ...GatsbyImageSharpSizes
      }
    }
    arrowImage: imageSharp(id: {regex: "/consequences6-circle-with-arrow/"}){
      sizes(maxWidth:1240){
        ...GatsbyImageSharpSizes
      }
    }
  }
`
export default ConsequencesPage