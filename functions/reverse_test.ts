import { SlackFunctionTester } from "deno-slack-sdk/mod.ts";
import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import ReverseString from "./reverse.ts";

const { createContext } = SlackFunctionTester("reverse");

Deno.test("Reverse string function test", async () => {
  const inputs = { stringToReverse: "foo" };
  const { outputs } = await ReverseString(createContext({ inputs }));
  assertEquals(outputs?.reverseString, "oof");
});
