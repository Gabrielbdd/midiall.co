import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { onPrimary, primary } from '../../style/theme'
import { Styleable } from '../interfaces'

interface Props extends Styleable {
  disabled?: boolean
  outline?: boolean
  invert?: boolean
  rounded?: boolean
  href?: string
  onClick?: (e: MouseEvent) => any
}

const button = css`
  background-color: ${primary};
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: ${onPrimary};
  text-align: center;
  border: 1px solid ${primary};
  padding: 12px 30px;
  line-height: 14px;
  text-decoration: none;
  transition: all ease-in-out 0.2s;
  margin-left: 0;
  cursor: pointer;

  &:hover:not(&--disabled) {
    background-color: ${onPrimary};
    border: 1px solid ${onPrimary};
    color: ${primary};
    text-decoration: none;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: initial;
  }
`

const buttonDisabled = css`
  color: rgba(0, 0, 0, 0.26);
  background-color: rgba(0, 0, 0, 0.12);
  cursor: default;
  pointer-events: none;
  box-shadow: none;
  border: 0;
`

const buttonInvert = css`
  color: ${primary};
  background-color: ${onPrimary};

  &:hover:not(&${buttonDisabled}) {
    color: ${onPrimary};
    background-color: ${primary};
    border-color: ${primary};
  }
`

const buttonRounded = css`
  border-radius: 100px;
`

const buttonOutline = css`
  box-shadow: none;
  background-color: transparent;
  color: ${primary};
`

export const Button: FunctionComponent<Props> = ({
  disabled,
  outline,
  invert,
  rounded = true,
  href,
  className,
  children,
  ...rest
}) => {
  const Tag = href ? 'a' : 'button'
  const classes = clsx(
    button,
    {
      [buttonDisabled]: disabled,
      [buttonRounded]: rounded,
      [buttonInvert]: invert,
      [buttonOutline]: outline,
    },
    className,
  )

  let props: { [key: string]: any } = {
    className: classes,
    ...rest,
  }

  if (href) {
    props = { ...props, href }
  } else {
    props = { ...props, disabled }
  }

  return <Tag {...props}>{children}</Tag>
}
