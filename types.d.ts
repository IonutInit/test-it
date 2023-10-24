export type TestType = "equal" | "error" | "be" | "haveProperty";

export type TestOptionsType = {
  description?: string;
  type?: TestType;
};

type ExpectedValue = any | [string, any];

export type CaseType = [any[], ExpectedValue, Partial<TestOptionsType>?][];

export type FuncType = Function;
