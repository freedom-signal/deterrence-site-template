import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styles from './index.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className={styles.innerContainer}>
      {children()}
    </div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
