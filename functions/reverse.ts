import { SlackFunction } from "deno-slack-sdk/mod.ts";
import { ReverseFunction } from "../manifest.ts";

export default SlackFunction(ReverseFunction, ({ inputs, env }) => {
  console.log(`reversing ${inputs.stringToReverse}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse.split("").reverse().join("");
  return {
    outputs: { reverseString },
  };
});
