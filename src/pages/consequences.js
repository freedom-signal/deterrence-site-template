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
        <h className="riskBuying">Are you willing to risk the consequences of buying sex?</h>
        <div className={sharedStyles.dividerLine}></div>
        <p className="offenderRegistry">You might end up on the { data.site.siteMetadata.sex_offender_registry }</p>
        <Img
          alt="Text overlay that reads: I can't go to my kid's birthday because I'm a registered sex offender. Background image of a child blowing out some candles."
          sizes={data.childImage.sizes}  
        />
        <p className="getArrested">Get arrested and you could spend up to {data.site.siteMetadata.jail_time } in jail</p>
        <Img
          alt="Text overlay that reads: My whole world came crashing down, and I felt like I wanted to die. Background image of a man standing in a jail cell."  
          sizes={data.jailImage.sizes}
          />
        <p className="payFines">You might pay up to  { data.site.siteMetadata.fine } in fines, but you could lose much more than that</p>  
          <Img
            alt="Text overlay that reads: I used to be my daughter's favorite, now she won't even look at me. Background image of a mother consoling her crying daughter."
            sizes={data.daughterImage.sizes}
          />
        <p className="loseJob">You could become a liability to your company and lose your job</p>
          <Img
            alt="Text overlay that reads: They said someone in h.r. saw my mugshot on the news. Background image of a man sitting at the bar."
            sizes={data.newsImage.sizes}
          />
        <p className="rethinkBuying">Ready to rethink buying sex? There is help available for you now.</p>
          <a href="/alternatives" className="arrow-redirect"><Img 
            alt="Image of an ellipse circle with an arrow within it"
            resolutions={data.arrowImage.resolutions}
          /></a>
        <a><p className="readLaws">read the laws here</p></a>
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
      resolutions(width:400){
        ...GatsbyImageSharpResolutions
      }  
    }
  }
`
export default ConsequencesPage