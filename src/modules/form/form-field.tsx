import { FunctionComponent, VNode } from 'preact'
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'preact/hooks'

import { useObservable } from '../../utils/use-observable'
import { FormContext } from './form-context'

interface ChildProps {
  value: string
  disabled: boolean
  onChange: (e: any) => any
}

interface Props {
  name: string
  children: (props: ChildProps) => VNode
}

export const FormField: FunctionComponent<Props> = ({ name, children }) => {
  const parent = useContext(FormContext)
  const control = useMemo(() => parent.get(name), [name])
  const [value, setValue] = useState(control ? control.value.getValue() : '')
  const disabled = useObservable(parent.disabled)
  const onChange = useCallback((e: any) => {
    const incoming = e.target.value

    if (control) {
      control.set(incoming)
    }

    setValue(incoming)
  }, [])

  useEffect(() => {
    if (control) {
      control.value.subscribe(setValue)
    }
  }, [control])

  return children({ value, disabled, onChange })
}
