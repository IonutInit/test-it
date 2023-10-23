import { TestType, TestOptionsType, CaseType, FuncType } from "./types";

const testIt = (
  func: FuncType,
  cases: CaseType,
  defaultOptions: TestOptionsType = { description: "", type: "equal" }
) => {
  describe(func.name, () => {
    cases.forEach(([input, expected, options = {}]) => {
      const execType: TestType = options.type || defaultOptions.type!;
      const description: string =
        options.description || defaultOptions.description!;

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

export default testIt;
