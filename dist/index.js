"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var test_it_exports = {};
__export(test_it_exports, {
  default: () => test_it_default,
});
module.exports = __toCommonJS(test_it_exports);
var testIt = (func, cases, { description = "", type = "equal" } = {}) => {
  describe(func.name, () => {
    cases.forEach(
      ([input, expected, options = { description: false, type: false }]) => {
        let execType;
        !options.type ? (execType = type) : (execType = options.type);
        test(!options.description ? description : options.description, () => {
          switch (execType) {
            case "be":
              expect(func(...input)).toBe(expected);
              break;
            case "error":
              expect(() => func(...input)).toThrowError(expected);
              break;
            case "equal":
              expect(func(...input)).toEqual(expected);
              break;
            case "hasProperty":
              expect(func(...input)).toHaveProperty(expected);
            case "warn":
              const warnSpy = jest
                .spyOn(console, "warn")
                .mockImplementation(() => {});
              func(...input);
              expect(warnSpy).toHaveBeenCalledWith(expected);
              warnSpy.mockRestore();
              break;
            default:
              break;
          }
        });
      }
    );
  });
};
var test_it_default = testIt;
