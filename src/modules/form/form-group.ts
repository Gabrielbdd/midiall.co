import { BehaviorSubject } from '../../utils/behavior-subject'
import { FormControl } from './form-control'
import { Validator } from './types'

type Field = [any, Validator[]] | [any]

export class FormGroup {
  public valid = new BehaviorSubject(false)
  public submitting = new BehaviorSubject(false)
  public disabled = new BehaviorSubject(false)

  private errors = new Set<FormControl>()
  private fields = new Map<string, FormControl>()

  constructor(fieldsObj: { [key: string]: Field }) {
    const fieldsMap = Object.entries(fieldsObj).map(
      ([name, [value, validators]]) => [
        name,
        new FormControl(this, value, validators),
      ],
    ) as Array<[string, FormControl]>

    this.fields = new Map(fieldsMap)
  }

  public get = (name: string) => this.fields.get(name)

  public updateError = (formControl: FormControl, hasError: boolean) => {
    hasError ? this.errors.add(formControl) : this.errors.delete(formControl)
    this.valid.next(this.errors.size === 0)
  }

  public get values() {
    return Array.from(this.fields).reduce(
      (curr, [name, { value: value$ }]) => ({
        ...curr,
        [name]: value$.getValue(),
      }),
      {} as { [key: string]: any },
    )
  }

  public reset = () => {
    for (const [, control] of this.fields) {
      control.reset()
    }
  }
}
