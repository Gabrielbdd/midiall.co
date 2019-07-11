import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { gte } from '../../style/breakpoints'
import { Styleable } from '../interfaces'

const section = css`
  padding: 50px 0;

  ${gte('lg')} {
    padding: 100px 80px;
  }
`

interface Props extends Styleable {}

export const Section: FunctionComponent<Props> = ({ className, children }) => (
  <section className={clsx(section, className)}>{children}</section>
)
