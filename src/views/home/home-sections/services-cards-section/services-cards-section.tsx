import { css } from 'linaria'
import React from 'react'

import { Container } from '../../../../components'
import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
} from '../../../../components/card'
import { Section } from '../../../../components/section/section'
import { gte } from '../../../../style/breakpoints'

const cardsList = css`
  grid-row: content;
  grid-column: content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -12px -50px;
  padding: 0;
`
const cardItem = css`
  flex: 1 1 100%;
  margin: 0 12px 50px;

  ${gte('md')} {
    display: flex;
    flex: 1 1 40%;
    max-width: 45%;
    margin: 0 12px 28px;
  }

  ${gte('lg')} {
    flex: 1 1 30%;
    max-width: 40%;
  }
`

const card = css`
  grid-template: 'title' 'description' / 1fr;
  position: relative;
  border-radius: 8px;
  transition: transform 0.5s;
  padding: 48px 36px;
  background-color: #e2474f;
  color: #fff;
  margin-top: 10px;

  &:hover {
    transform: translateY(-10px);
  }
`

const cardImage = css`
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  left: 36px;
  width: 60px;
`

const cardTitle = css`
  font-size: 1.625rem;
  margin: 0;
`

const cardDescription = css`
  font-size: 1rem;
  margin: 0;
`

const cards = [
  {
    title: 'Criação de landing pages',
    image: '/assets/page_creation--white.svg',
    body: 'Transforme visitantes em leads com páginas de alta conversão.',
  },
  {
    title: 'Seu email profissional',
    image: '/assets/email--white.svg',
    body: (
      <>
        Passe mais credibilidade enviando emails com o seu próprio domínio —{' '}
        <i>seunome@suaempresa.com</i>.
      </>
    ),
  },
  {
    title: 'Automação de fluxo de emails',
    image: '/assets/send_email--white.svg',
    body:
      'Cresça e engaje com a sua lista de leads enviando emails automáticos.',
  },
]

export const ServicesCardsSection = () => (
  <Section>
    <Container>
      <ol className={cardsList}>
        {cards.map(({ title, image, body }) => (
          <li key={title} className={cardItem}>
            <Card className={card}>
              <CardImage src={image} alt="" className={cardImage} />
              <CardTitle className={cardTitle}>{title}</CardTitle>
              <CardDescription className={cardDescription}>
                {body}
              </CardDescription>
            </Card>
          </li>
        ))}
      </ol>
    </Container>
  </Section>
)
