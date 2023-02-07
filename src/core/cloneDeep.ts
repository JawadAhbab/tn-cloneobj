import { isArray, isObject } from 'tn-validate'
import { AnyObject } from 'tn-typescript'

export const cloneDeep = (val: any) => {
  if (isArray(val)) {
    const newarr: any[] = []
    val.forEach(v => newarr.push(cloneDeep(v)))
    return newarr
  }

  if (isObject(val)) {
    const newobj: AnyObject = {}
    Object.entries(val).forEach(([prop, v]) => (newobj[prop] = cloneDeep(v)))
    return newobj
  }

  return val
}
