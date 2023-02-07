import { isArray, isObject } from 'tn-validate'

export const cloneShallow = (val: any) => {
  if (isArray(val)) return [...val]
  if (isObject(val)) return { ...val }
  return val
}
