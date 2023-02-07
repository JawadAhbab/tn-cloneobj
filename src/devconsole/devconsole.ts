import { consoler } from 'tn-consoler'

export default {
  invalid (value: any) {
    consoler.groupCollapsed(`{bgred:error}
    {yellow+b:cloneobj}{b:()}
    {grey+b:>} {red+b:Invalid value}`)
    consoler.log(`{b:Expected :} value to be an
    {cyan+b:Object} or {cyan+b:Array}`)
    consoler.log('{b:Returned :}', {}, value)
    consoler.log(`{b:Stop logging :}
    {yellow+b:cloneobj}{b:(value, deep, }{orange+b:false}{b:)}`)
    consoler.groupEnd(true)
  }
}
