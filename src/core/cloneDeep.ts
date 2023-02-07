import { isArray, isObject } from 'tn-validate'
import { AnyObject } from 'tn-typescript'

export default function cloneDeep (val: any) {
  // ARRAY
  if (isArray(val)) {
    const newarr: any[] = []
    val.forEach((v) => newarr.push(cloneDeep(v)))
    return newarr
  }

  // OBJECT
  if (isObject(val)) {
    const newobj: AnyObject = {}
    Object.entries(val).forEach(([prop, v]) => (newobj[prop] = cloneDeep(v)))
    return newobj
  }

  // OTHER
  return val
}
