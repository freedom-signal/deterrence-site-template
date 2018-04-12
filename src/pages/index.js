import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = () => (
  <div>
    <h1>Site Title</h1>
    <p>Description blurb. Fusce in elit nunc. Donec at lectus velit.
    Etiam iaculis, nisi ac fermentum feugiat, ipsum libero pretium tortor,
    sit amet faucibus erat augue non dolor. Pellentesque et arcu porta, pellentesque
    justo sit amet, accumsan quam. Vivamus nec lobortis nisi, vel pharetra lacus. </p>

    <div className={styles.iconsContainer}>

      <div className={styles.cardContainer}>
        <a href="/harm"><img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/></a>
        <p>Short description - Harm  Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className={styles.cardContainer}>
        <a href="/harm"><img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/></a>
        <p>Short description - Consequences Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className={styles.cardContainer}>
        <a href="/harm"><img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/></a>
        <p>Short description - Alternatives Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className={styles.cardContainer}>
        <a href="/harm"><img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/></a>
        <p>Short description - Contact Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>


    </div>
  </div>
)

export default IndexPage
