import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import {
  DefaultSection,
  DefaultSectionExtra,
  DefaultSectionHeading,
  DefaultSectionImage,
  DefaultSectionParagraph,
} from '../../../../components/default-section'
import { gte } from '../../../../style/breakpoints'
import { EstablishPresenceCards } from './establish-presence-cards/establish-presence-cards'

const image = css`
  display: none;

  ${gte('lg')} {
    display: initial;
  }
`

export const EstablishPresenceSection: FunctionComponent = () => (
  <DefaultSection direction="ltr">
    <DefaultSectionHeading>Estabeleça sua presença</DefaultSectionHeading>
    <DefaultSectionParagraph>
      Impacte o seu público nas plataformas que ele utiliza.
    </DefaultSectionParagraph>
    <DefaultSectionImage
      src="/assets/people_search.svg"
      alt="Homem se vendo no espelo"
      className={image}
    />
    <DefaultSectionExtra>
      <EstablishPresenceCards />
    </DefaultSectionExtra>
  </DefaultSection>
)
