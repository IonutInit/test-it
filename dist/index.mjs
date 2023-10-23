// index.ts
var testIt = (func, cases, defaultOptions = { description: "", type: "equal" }) => {
  describe(func.name, () => {
    cases.forEach(([input, expected, options = {}]) => {
      const execType = options.type || defaultOptions.type;
      const description = options.description || defaultOptions.description;
      test(description, () => {
        if (execType === "error") {
          expect(() => func(...input)).toThrowError(expected);
        } else if (execType === "be") {
          expect(func(...input)).toEqual(expected);
        } else if (execType === "equal") {
          expect(func(...input)).toEqual(expected);
        }
      });
    });
  });
};
var test_it_default = testIt;
export {
  test_it_default as default
};
