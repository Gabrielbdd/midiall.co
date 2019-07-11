import { Location } from '@reach/router'
import clsx from 'clsx'
import { Link } from 'gatsby'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { gte } from '../../style/breakpoints'
import { Button } from '../button/button'
import { Container } from '../container/container'
import { Logo } from '../logo/logo'
import { useHeaderVisibility } from './useHeaderVisibility'

const header = css`
  position: fixed;
  transform: translateY(0);
  will-change: transform;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 65px;
  display: grid;
  padding: 0;
  background: #fff;
  z-index: 50;

  ${gte('md')} {
    height: 85px;
  }
`

const container = css`
  display: grid;
  grid-template: 1fr / 1fr auto;
  align-items: center;
`

const nav = css`
  margin: 0 0 0 auto;
`

const isHidden = css`
  transform: translateY(-125%);
`

const isOver = css`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 35px 0px;
`

export const Header: FunctionComponent = () => {
  const { hidden, over } = useHeaderVisibility()

  const classes = clsx(header, { [isHidden]: hidden }, { [isOver]: over })

  return (
    <Location>
      {({ location }) => (
        <header className={classes}>
          <Container className={container}>
            <Link to="/">
              <Logo />
            </Link>

            {location.pathname !== '/fale-com-a-gente' && (
              <nav className={nav}>
                <Button href="/fale-com-a-gente">Fale com a gente</Button>
              </nav>
            )}
          </Container>
        </header>
      )}
    </Location>
  )
}
