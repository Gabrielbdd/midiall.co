import React, { FunctionComponent, useCallback, useEffect, useRef } from 'react'

import { createTextMaskInputElement } from 'text-mask-core'
import { InputProps, TextField } from '../text-field/text-field'

type Mask = Array<string | RegExp>

interface Props extends InputProps {
  mask: ((raw: string) => Mask) | Mask
}

export const MaskedInput: FunctionComponent<Props> = ({
  children,
  mask,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const textMask = useRef<any>(null)

  const update = useCallback(() => {
    if (textMask.current) {
      textMask.current.update()
    }
  }, [textMask.current])

  const onChange = useCallback(
    (e: any) => {
      update()

      if (props.onChange) {
        props.onChange(e)
      }
    },
    [update, props.onChange],
  )

  useEffect(() => {
    const input = ref.current

    if (!input) {
      return
    }

    textMask.current = createTextMaskInputElement({
      inputElement: input,
      mask,
      guide: false,
    })

    update()
  }, [ref.current])

  return (
    <TextField {...props} onChange={onChange} elRef={ref}>
      {children}
    </TextField>
  )
}
