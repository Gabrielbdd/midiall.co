import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { gte } from '../../style/breakpoints'

const logo = css`
  height: 21px;

  ${gte('lg')} {
    height: 27px;
  }
`

export const Logo: FunctionComponent = () => (
  <img className={logo} src="/assets/logo.svg" />
)
