type TestType = "equal" | "error" | "be";

type TestOptionsType = {
  description?: string;
  type?: TestType;
};

type CaseType = [any[], any, Partial<TestOptionsType>?][];

type FuncType = Function;

declare const testIt: (func: FuncType, cases: CaseType, defaultOptions?: TestOptionsType) => void;

export { testIt as default };
