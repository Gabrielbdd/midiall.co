import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { gte } from '../../style/breakpoints'
import { Container } from '../container/container'
import { Styleable } from '../interfaces'
import { Section } from '../section/section'

const ltr = css``

const rtl = css``

const defaultSection = css`
  display: grid;
  grid-template-areas: 'heading' 'paragraph' 'image' 'extra';

  ${gte('lg')} {
    column-gap: 80px;

    &.${ltr} {
      grid-template:
        'heading image' auto
        'paragraph image' auto
        'extra image' 1fr
        / 1fr 1fr;
    }

    &.${rtl} {
      grid-template:
        'image heading' auto
        'image paragraph' auto
        'image extra' 1fr
        / 1fr 1fr;
    }
  }
`

interface Props extends Styleable {
  direction: 'ltr' | 'rtl'
}

export const DefaultSection: FunctionComponent<Props> = ({
  className,
  direction,
  children,
}) => (
  <Section className={className}>
    <Container
      className={clsx(defaultSection, {
        [ltr]: direction === 'ltr',
        [rtl]: direction === 'rtl',
      })}
    >
      {children}
    </Container>
  </Section>
)
