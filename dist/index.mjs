// index.ts
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
export { test_it_default as default };
