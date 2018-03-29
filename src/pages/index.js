import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/page-3/">Go to page 3</Link></li>
    </ul>
  </div>
)

export default IndexPage
