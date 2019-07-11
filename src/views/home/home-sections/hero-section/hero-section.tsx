import { css } from 'linaria'
import React from 'react'

import {
  DefaultSection,
  DefaultSectionHeading,
  DefaultSectionImage,
  DefaultSectionParagraph,
} from '../../../../components/default-section'
import { gte } from '../../../../style/breakpoints'

const heroSection = css`
  padding-top: 110px;

  ${gte('lg')} {
    padding-top: 150px;
  }
`

export const HeroSection = () => (
  <DefaultSection direction="ltr" className={heroSection}>
    <DefaultSectionHeading>
      Transforme a forma como o seu negócio é visto
    </DefaultSectionHeading>

    <DefaultSectionParagraph>
      Nós cuidamos do seu Marketing Social para você focar no que é importante:
      Entregar qualidade para o seu cliente.
    </DefaultSectionParagraph>

    <DefaultSectionImage
      src="/assets/social_dashboard.svg"
      alt="Dashboard de redes sociais"
    />
  </DefaultSection>
)
