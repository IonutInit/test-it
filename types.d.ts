export type TestType = "equal" | "error" | "be";

export type TestOptionsType = {
  description?: string;
  type?: TestType;
};

export type CaseType = [any[], any, Partial<TestOptionsType>?][];

export type FuncType = Function;
