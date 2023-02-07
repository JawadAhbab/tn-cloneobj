import { isArray, isObject } from 'tn-validate'

export default function (val: any) {
  if (isArray(val)) return [...val]
  if (isObject(val)) return { ...val }
  return val
}
