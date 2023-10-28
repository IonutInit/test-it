export type TestType = "be" | "equal" | "error" | "hasProperty" | "warn";

type Options = {
  description?: string;
  type?: TestType;
};

export type TestIt = {
  (func: Function, cases: any[], options?: Options): any;
};
