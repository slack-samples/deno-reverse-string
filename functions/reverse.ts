import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const ReverseFunction = DefineFunction({
  callback_id: "reverse",
  title: "Reverse",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse.ts",
  input_parameters: {
    properties: {
      stringToReverse: {
        type: Schema.types.string,
        description: "The string to reverse",
      },
    },
    required: ["stringToReverse"],
  },
  output_parameters: {
    properties: {
      reverseString: {
        type: Schema.types.string,
        description: "The string in reverse",
      },
    },
    required: ["reverseString"],
  },
});

export default SlackFunction(ReverseFunction, ({ inputs, env }) => {
  console.log(`reversing ${inputs.stringToReverse}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse.split("").reverse().join("");
  return {
    outputs: { reverseString },
  };
});
