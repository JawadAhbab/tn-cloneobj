import { isArrObject } from 'tn-validate'
import { cloneDeep } from './core/cloneDeep'
import { cloneShallow } from './core/cloneShallow'
import { devconsole } from './devconsole/devconsole'

export const cloneobj = function <T>(value: T, deepclone = true, logging = true): T {
  if (!isArrObject(value)) {
    if (process.env.NODE_ENV === 'development') if (logging) devconsole.invalid(value)
    return value
  }

  if (deepclone) return cloneDeep(value) as unknown as T
  return cloneShallow(value) as unknown as T
}
