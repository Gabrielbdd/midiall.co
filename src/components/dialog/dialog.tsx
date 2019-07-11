import { css } from 'linaria'
import React, { FunctionComponent, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'

import { gte } from '../../style/breakpoints'

const dialog = css`
  position: fixed;
  z-index: 1300;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  display: grid;
  align-items: center;
  justify-items: center;
`

const dialogBackdrop = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  position: fixed;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`

const dialogContent = css`
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: #fff;
  max-width: 600px;
  padding: 24px;
  margin: 10px;

  ${gte('sm')} {
    margin: 48px;
  }
`

interface Props {
  open: boolean
  onClose: () => any
}

export const Dialog: FunctionComponent<Props> = ({
  children,
  open,
  onClose,
}) => {
  if (typeof window === 'undefined' || !open) {
    return <div />
  }

  const container = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    document.body.append(container)

    return () => container.remove()
  }, [])

  return createPortal(
    <div className={dialog}>
      <div className={dialogBackdrop} onClick={onClose} />
      <div className={dialogContent}>{children}</div>
    </div>,
    container,
  )
}
