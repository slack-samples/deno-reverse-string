import type { FunctionHandler } from "deno-slack-sdk/types.ts";

// deno-lint-ignore no-explicit-any
const reverse: FunctionHandler<any, any> = async ({ inputs, env }) => {
  console.log(`reversing ${inputs.stringToReverse}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse.split("").reverse().join("");
  return await {
    outputs: { reverseString },
  };
};

export default reverse;
