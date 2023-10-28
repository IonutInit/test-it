type TestType = "be" | "equal" | "error" | "hasProperty" | "warn";

type Options = {
  description?: string;
  type?: TestType;
};

type TestIt = {
  (func: Function, cases: any[], options?: Options): any;
};

declare const testIt: TestIt;

export { testIt as default };
