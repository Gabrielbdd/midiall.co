import clsx from 'clsx'
import { css } from 'linaria'
import React, {
  FunctionComponent,
  MutableRefObject,
  useCallback,
  useState,
} from 'react'

import { primary } from '../../style/theme'
import { exist } from '../../utils/exist'

const labelActive = 'transform: translate(12px, 10px) scale(0.75);'

const textFieldInput = css``
const textFieldTextarea = css`
  height: auto;
  resize: none;
`

const textField = css`
  background-color: rgba(0, 0, 0, 0.09);
  transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:hover:not(&--disabled) {
    background-color: rgba(0, 0, 0, 0.13);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid ${primary};
  }

  ${textFieldInput},
  ${textFieldTextarea} {
    display: block;
    width: 100%;
    padding: 27px 12px 10px;
    border: 0;
    outline: 0;
    font: inherit;
    font-size: 0.9rem;
    line-height: 1.1875em;
    color: currentColor;
    background: transparent;
  }
`

const textFieldLabel = css`
  display: block;
  position: absolute;
  transform-origin: top left;
  transform: translate(12px, 20px) scale(1);
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  pointer-events: none;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  width: 100%;
`

const textFieldIsActive = css`
  background-color: rgba(0, 0, 0, 0.09) !important;

  &::after {
    transform: scaleX(1);
  }

  ${textFieldLabel} {
    color: $primary-color;
    ${labelActive}
  }
`

const textFieldIsFilled = css`
  ${textFieldLabel} {
    ${labelActive}
  }
`

const textFieldDisabled = css`
  color: rgba(0, 0, 0, 0.38);
  background-color: rgba(0, 0, 0, 0.12);
  cursor: default;
`

export interface InputProps {
  id: string
  type?: string
  label?: string
  placeholder?: string
  value?: any
  disabled?: boolean
  required?: boolean

  onChange?: (e: any) => any
}

interface Props extends InputProps {
  multline?: boolean
  rows?: number

  elRef?: MutableRefObject<HTMLElement | null>
}

export const TextField: FunctionComponent<Props> = ({
  id,
  type = 'text',
  label,
  placeholder,
  value,
  disabled,
  required,
  multline,
  rows = 5,

  elRef,
  onChange,
}) => {
  const [active, setActive] = useState(false)
  const onFocus = useCallback(() => setActive(true), [])
  const onBlur = useCallback(() => setActive(false), [])

  const defaultProps = {
    id,
    label,
    placeholder: active ? placeholder : '',
    value,
    disabled,
    required,
    multline,

    onChange,
    onFocus,
    onBlur,
  }
  const inputProps = {
    ...defaultProps,
    className: textFieldInput,
    type,
    ref: elRef as MutableRefObject<HTMLInputElement>,
  }
  const textareaProps = {
    ...defaultProps,
    className: textFieldTextarea,
    rows,
    ref: elRef as MutableRefObject<HTMLTextAreaElement>,
  }

  return (
    <div
      className={clsx(textField, {
        [textFieldIsActive]: active,
        [textFieldIsFilled]: exist(value),
        [textFieldDisabled]: disabled,
      })}
    >
      <label className={textFieldLabel} htmlFor={id}>
        {label}
        {required && '*'}
      </label>

      {multline ? <textarea {...textareaProps} /> : <input {...inputProps} />}
    </div>
  )
}
