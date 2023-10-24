import {
  TestType,
  TestOptionsType,
  CaseType,
  FuncType,
  ExpectedValue,
} from "./types";

type AssertionMethodTypes = {
  [key in TestType]: (received: any, expected: any) => void;
};

const testIt = (
  func: FuncType,
  cases: CaseType,
  defaultOptions: TestOptionsType = { description: "", type: "equal" }
) => {
  const createExpectation = (method: (expectedValue: ExpectedValue) => any) => {
    return (received: any, expected: any) => {
      method.call(expect(received), expected);
    };
  };

  const assertionMethods: AssertionMethodTypes = {
    equal: createExpectation(expect.prototype.toEqual),
    be: createExpectation(expect.prototype.toBe),
    error: (received, expected) => expect(received).toThrowError(expected),
    haveProperty: (received, [propertyKey, value]) =>
      expect(received).toHaveProperty(propertyKey, value),
  };

  describe(func.name, () => {
    cases.forEach(([input, expected, options = {}]) => {
      const execType: TestType = options.type || defaultOptions.type!;
      const description: string =
        options.description || defaultOptions.description!;
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

export default testIt;
