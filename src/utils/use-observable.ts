import { useEffect, useState } from 'preact/hooks'

import { BehaviorSubject, Observable } from './behavior-subject'

export function useObservable<T>(observable: Observable<T>, initialValue: T): T
export function useObservable<T>(behaviorSubject: BehaviorSubject<T>): T

export function useObservable<T>(
  observable: Observable<T> | BehaviorSubject<T>,
  initialValue?: T,
) {
  const [value, setValue] = useState(
    observable instanceof BehaviorSubject
      ? observable.getValue()
      : initialValue,
  )

  useEffect(() => {
    observable.subscribe(setValue)
  }, [observable])

  return value
}
