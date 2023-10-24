//@ts-nocheck
import testIt from ".";
import { CaseType } from "./types";

const add = (a: number, b: number) => a + b;
const greet = (name: string) => `Hello, ${name}!`;
const throwError = () => {
  throw new Error("Error!");
};
const getObject = () => ({ name: "John", age: 30 });

testIt(add, [
  [[1, 2], 3, { description: "adds 1 + 2 to get 3" }],
  [[-1, -1], -2, { description: "adds -1 + -1 to get -2" }],
]);

testIt(greet, [[["John"], "Hello, John!", { description: "greets John" }]], {
  type: "equal",
});

testIt(
  throwError,
  [
    [
      [],
      "Error!",
      { description: "throws an error with message Error!", type: "error" },
    ],
  ],
  {}
);

testIt(
  getObject,
  [
    [[], { name: "John", age: 30 }, { description: "returns correct object" }],
    [
      [],
      ["name", "John"],
      {
        description: "checks if object has property name with value John",
        type: "haveProperty",
      },
    ],
  ],
  {}
);
