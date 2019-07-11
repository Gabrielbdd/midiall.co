import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
} from '../../../../../components/card'
import { lte } from '../../../../../style/breakpoints'

const cardTitle = css``
const cardDescription = css``
const cardImage = css``

const card = css`
  padding: 0;

  li:not(:last-child) {
    margin-bottom: 25px;
  }

  ${lte('lg')} {
    ${cardTitle}, ${cardDescription} {
      text-align: center;
    }

    ${cardImage} {
      margin: 0 auto;
    }
  }
`

const cards = [
  {
    icon: '/assets/divulgation.svg',
    title: 'Google, Facebook e Instagram',
    description:
      'Ganhe destaque utilizando anúncios para as maiores mídias digitais da atualidade.',
  },
  {
    icon: '/assets/positioning.svg',
    title: 'Posicionamento digital',
    description: 'Seja visto como uma autoridade no seu meio de atuação.',
  },
]

export const EstablishPresenceCards: FunctionComponent = () => (
  <ol className={card}>
    {cards.map(({ icon, title, description }) => (
      <li key={title}>
        <Card>
          <CardImage src={icon} alt="" className={cardImage} />
          <CardTitle className={cardTitle}>{title}</CardTitle>
          <CardDescription className={cardDescription}>
            {description}
          </CardDescription>
        </Card>
      </li>
    ))}
  </ol>
)
