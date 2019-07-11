import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = () => <div>Test</div>

const IndexPage = () => {
  // const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
