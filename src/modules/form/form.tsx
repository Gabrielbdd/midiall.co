import { createElement, FunctionComponent } from 'preact'
import { useCallback } from 'preact/hooks'

import { FormContext } from './form-context'
import { FormGroup } from './form-group'

interface Props {
  className?: string
  control: FormGroup
  onSubmit?: () => Promise<boolean>
}

export const Form: FunctionComponent<Props> = ({
  className,
  children,
  control,
  onSubmit,
}) => {
  const submitHandler = useCallback(
    (e: Event) => {
      e.preventDefault()

      if (!onSubmit || control.submitting.getValue()) {
        return
      }

      control.submitting.next(true)
      control.disabled.next(true)

      onSubmit().then(success => {
        if (success) {
          control.reset()
        }

        control.submitting.next(false)
        control.disabled.next(false)
      })
    },
    [onSubmit],
  )

  return (
    <FormContext.Provider value={control}>
      <form className={className} onSubmit={submitHandler}>
        {children}
      </form>
    </FormContext.Provider>
  )
}
