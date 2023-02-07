'use strict';

var _objectSpread = require("@babel/runtime/helpers/objectSpread2").default;
var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray").default;
var _slicedToArray = require("@babel/runtime/helpers/slicedToArray").default;
var tnValidate = require('tn-validate');
var tnConsoler = require('tn-consoler');
var devconsole = {
  invalid: function invalid(value) {
    tnConsoler.consoler.groupCollapsed("{bgred:error}\n    {yellow+b:cloneobj}{b:()}\n    {grey+b:>} {red+b:Invalid value}");
    tnConsoler.consoler.log("{b:Expected :} value to be an\n    {cyan+b:Object} or {cyan+b:Array}");
    tnConsoler.consoler.log('{b:Returned :}', {}, value);
    tnConsoler.consoler.log("{b:Stop logging :}\n    {yellow+b:cloneobj}{b:(value, deep, }{orange+b:false}{b:)}");
    tnConsoler.consoler.groupEnd(true);
  }
};
function cloneDeep(val) {
  // ARRAY
  if (tnValidate.isArray(val)) {
    var newarr = [];
    val.forEach(function (v) {
      return newarr.push(cloneDeep(v));
    });
    return newarr;
  }
  // OBJECT
  if (tnValidate.isObject(val)) {
    var newobj = {};
    Object.entries(val).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        prop = _ref2[0],
        v = _ref2[1];
      return newobj[prop] = cloneDeep(v);
    });
    return newobj;
  }
  // OTHER
  return val;
}
function cloneShallow(val) {
  if (tnValidate.isArray(val)) return _toConsumableArray(val);
  if (tnValidate.isObject(val)) return _objectSpread({}, val);
  return val;
}
var cloneobj = function cloneobj(value) {
  var deepclone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var logging = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!tnValidate.isArrObject(value)) {
    if (process.env.NODE_ENV === 'development') {
      if (logging) devconsole.invalid(value);
    }
    return value;
  }
  if (deepclone) return cloneDeep(value);
  return cloneShallow(value);
};
exports.cloneobj = cloneobj;
