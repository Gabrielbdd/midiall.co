type Callback<T> = (v: T) => any

export interface Observable<T> {
  subscribe: (cb: Callback<T>) => void
}

export class BehaviorSubject<T> implements Observable<T> {
  private subscribers: Array<Callback<T>> = []

  constructor(private value: T) {}

  public next = (newValue: T) => {
    const current = this.value

    this.value = newValue

    if (current !== newValue) {
      this.notify()
    }
  }

  public subscribe = (cb: Callback<T>) => {
    this.subscribers.push(cb)
    this.notify()
  }

  public getValue = () => this.value

  private notify = () => {
    for (const subscriber of this.subscribers) {
      subscriber(this.value)
    }
  }
}
