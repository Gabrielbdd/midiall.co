import { createContext } from 'preact'
import { FormGroup } from './form-group'

export const FormContext = createContext<FormGroup>(new FormGroup({}))
