import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// import { DefaultSection } from '../components/default-section'

export const IndexPageTemplate = () => <div>Test</div>

const IndexPage = ({ data }: any) => {
  console.log(data)
  // const { frontmatter } = data.markdownRemark
  // const sections = frontmatter.sections

  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
        sections {
          type
          heading
          paragraph
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
