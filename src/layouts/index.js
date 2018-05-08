import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styles from './index.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TemplateWrapper = ({ data, children }) => (
  <div className={styles.wrapper}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
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

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
export default TemplateWrapper
