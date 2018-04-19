import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = () => (
  <div className={styles.pageContainer}>
    <h1>Site Title</h1>
    <p className={styles.siteDescription}>Description blurb. Fusce in elit nunc. Donec at lectus velit.
    Etiam iaculis, nisi ac fermentum feugiat, ipsum libero pretium tortor,
    sit amet faucibus erat augue non dolor. Pellentesque et arcu porta, pellentesque
    justo sit amet, accumsan quam. Vivamus nec lobortis nisi, vel pharetra lacus. </p>

    <div className={styles.iconsArea}>

      <div className={styles.iconCard}>
        <a href="/harm">
          <img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/>
        </a>
        <p className={styles.cardDescription}>Short description - Harm  Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className={styles.iconCard}>
        <a href="/consequences">
          <img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/>
        </a>
        <p className={styles.cardDescription}>Short description - Consequences Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className={styles.iconCard}>
        <a href="/alternatives">
          <img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/>
        </a>
        <p className={styles.cardDescription}>Short description - Alternatives Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className={styles.iconCard}>
        <a href="/">
          <img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/>
        </a>
        <p className={styles.cardDescription}>Short description - Contact Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

    </div>
  </div>
)

export default IndexPage
