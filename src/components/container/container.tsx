import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { gte } from '../../style/breakpoints'
import { Styleable } from '../interfaces'

const container = css`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${gte('sm')} {
    max-width: 540px;
  }

  ${gte('md')} {
    max-width: 720px;
  }

  ${gte('lg')} {
    max-width: 960px;
  }

  ${gte('xl')} {
    max-width: 1140px;
  }
`

interface Props extends Styleable {}

export const Container: FunctionComponent<Props> = ({
  children,
  className,
}) => <div className={clsx(container, className)}>{children}</div>
