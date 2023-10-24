// index.ts
var testIt = (
  func,
  cases,
  defaultOptions = { description: "", type: "equal" }
) => {
  const createExpectation = (method) => {
    return (received, expected) => {
      method.call(expect(received), expected);
    };
  };
  const assertionMethods = {
    equal: createExpectation(expect.prototype.toEqual),
    be: createExpectation(expect.prototype.toBe),
    error: (received, expected) => expect(received).toThrowError(expected),
    haveProperty: (received, [propertyKey, value]) =>
      expect(received).toHaveProperty(propertyKey, value),
  };
  describe(func.name, () => {
    cases.forEach(([input, expected, options = {}]) => {
      const execType = options.type || defaultOptions.type;
      const description = options.description || defaultOptions.description;
      const assertMethod = assertionMethods[execType];
      if (!assertMethod) {
        throw new Error(`Unsupported test type: ${execType}`);
      }
      test(description, () => {
        if (execType === "error") {
          assertMethod(() => func(...input), expected);
        } else {
          assertMethod(func(...input), expected);
        }
      });
    });
  });
};
var test_it_default = testIt;
export { test_it_default as default };
