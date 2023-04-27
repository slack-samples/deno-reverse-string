import { SlackFunctionTester } from "deno-slack-sdk/mod.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import ReverseFunction from "./reverse.ts";

const { createContext } = SlackFunctionTester("reverse");

Deno.test("Reverse string function test", async () => {
  const inputs = { stringToReverse: "foo" };
  const { outputs } = await ReverseFunction(createContext({ inputs }));
  assertEquals(outputs?.reversedString, "oof");
});
