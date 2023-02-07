import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { isArray, isObject, isArrObject } from 'tn-validate';
import { consoler } from 'tn-consoler';
var cloneDeep = function cloneDeep(val) {
  if (isArray(val)) {
    var newarr = [];
    val.forEach(function (v) {
      return newarr.push(cloneDeep(v));
    });
    return newarr;
  }
  if (isObject(val)) {
    var newobj = {};
    Object.entries(val).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        prop = _ref2[0],
        v = _ref2[1];
      return newobj[prop] = cloneDeep(v);
    });
    return newobj;
  }
  return val;
};
var cloneShallow = function cloneShallow(val) {
  if (isArray(val)) return _toConsumableArray(val);
  if (isObject(val)) return _objectSpread({}, val);
  return val;
};
var devconsole = {
  invalid: function invalid(value) {
    consoler.groupCollapsed("{bgred:error}\n    {yellow+b:cloneobj}{b:()}\n    {grey+b:>} {red+b:Invalid value}");
    consoler.log("{b:Expected :} value to be an\n    {cyan+b:Object} or {cyan+b:Array}");
    consoler.log('{b:Returned :}', {}, value);
    consoler.log("{b:Stop logging :}\n    {yellow+b:cloneobj}{b:(value, deep, }{orange+b:false}{b:)}");
    consoler.groupEnd(true);
  }
};
var cloneobj = function cloneobj(value) {
  var deepclone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var logging = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!isArrObject(value)) {
    if (process.env.NODE_ENV === 'development') if (logging) devconsole.invalid(value);
    return value;
  }
  if (deepclone) return cloneDeep(value);
  return cloneShallow(value);
};
export { cloneobj };
