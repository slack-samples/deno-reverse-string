import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { SlackAPIClient } from "slack-cloud-sdk/mod.ts";
import { ReverseString } from "./reverse.ts";

const client = new SlackAPIClient("");

Deno.test("Reverse string function test", async () => {
  const inputs = { stringToReverse: "foo" };
  const { outputs } = await ReverseString.run({ inputs, client, env: {} });
  assertEquals(outputs?.reverseString, "oof");
});
