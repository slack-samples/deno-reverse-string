import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import ReverseString from "./reverse.ts";

Deno.test("Reverse string function test", async () => {
  const inputs = { stringToReverse: "foo" };
  const { outputs } = await ReverseString({ inputs, env: {} });
  assertEquals(outputs?.reverseString, "oof");
});
