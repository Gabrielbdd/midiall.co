export const insertAt = <T>(source: T[], index: number, value: T) => {
  const result = source.slice()

  result.splice(index, 0, value)

  return result
}
