import { BehaviorSubject } from '../../utils/behavior-subject'
import { FormGroup } from './form-group'
import { Validator } from './types'

export class FormControl {
  public value: BehaviorSubject<any>

  constructor(
    private parent: FormGroup,
    private initial: any,
    private validators: Validator[] = [],
  ) {
    this.value = new BehaviorSubject(initial)

    // Run validation on every value change
    this.value.subscribe(this.validate)
  }

  public set = (newValue: any) => {
    this.value.next(newValue)
  }

  public reset = () => {
    this.set(this.initial)
  }

  private validate = (value: any) => {
    /**
     * Temporarily fix due to weird error
     * Remove to see
     */
    if (!this.validators) {
      return
    }

    for (const validator of this.validators) {
      if (!validator(value)) {
        return this.parent.updateError(this, true)
      }
    }

    this.parent.updateError(this, false)
  }
}
