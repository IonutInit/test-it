type TestType = "equal" | "error" | "be" | "haveProperty";

type TestOptionsType = {
  description?: string;
  type?: TestType;
};

type ExpectedValue = any | [string, any];

type CaseType = [any[], ExpectedValue, Partial<TestOptionsType>?][];

type FuncType = Function;

declare const testIt: (
  func: FuncType,
  cases: CaseType,
  defaultOptions?: TestOptionsType
) => void;

export { testIt as default };
