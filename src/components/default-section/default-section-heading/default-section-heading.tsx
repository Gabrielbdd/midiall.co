import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { lte } from '../../../style/breakpoints'
import { Styleable } from '../../interfaces'

const sectionHeading = css`
  grid-area: heading;
  margin: 0;

  ${lte('lg')} {
    text-align: center;
  }
`

interface Props extends Styleable {
  as?: 'h1' | 'h2'
}

export const DefaultSectionHeading: FunctionComponent<Props> = ({
  className,
  as: Wrapper = 'h1',
  children,
}) => <Wrapper className={clsx(sectionHeading, className)}>{children}</Wrapper>
