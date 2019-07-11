import { css } from 'linaria'
import React from 'react'

import { Container } from '../../../../components'
import { Button } from '../../../../components/button/button'
import { Section } from '../../../../components/section'
import { gte } from '../../../../style/breakpoints'
import { primary } from '../../../../style/theme'

const section = css`
  background-color: ${primary};
`

const container = css`
  display: grid;
  grid-gap: 30px;
  justify-items: center;
`
const text = css`
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  display: grid;
  grid-template: 1fr 1fr / auto;
  column-gap: 10px;
  margin: 0;

  ${gte('md')} {
    grid-template: 1fr / auto auto;
    font-size: 40px;
  }
`

export const TalkToUsSection = () => (
  <Section className={section}>
    <Container className={container}>
      <p className={text}>
        <span>Você faz.</span>
        <span>Nós divulgamos.</span>
      </p>

      <Button href="/fale-com-a-gente" invert={true}>
        Fale com a gente
      </Button>
    </Container>
  </Section>
)
