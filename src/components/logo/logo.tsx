import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { gte } from '../../style/breakpoints'
import { useStaticQuery, graphql } from 'gatsby'

const logo = css`
  height: 21px;

  ${gte('lg')} {
    height: 27px;
  }
`

export const Logo: FunctionComponent = () => {
  const {
    file: { publicURL },
  }: any = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return <img className={logo} src={publicURL} />
}
