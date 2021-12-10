import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";

export const ReverseString = DefineFunction(
  "reverse",
  {
    title: "Reverse",
    description: "Takes a string and reverses it",
    input_parameters: {
      required: ["stringToReverse"],
      properties: {
        stringToReverse: {
          type: Schema.types.string,
          description: "The string to reverse",
        },
      },
    },
    output_parameters: {
      required: ["reverseString"],
      properties: {
        reverseString: {
          type: Schema.types.string,
          description: "The string in reverse",
        },
      },
    },
  },
  async ({ inputs, env }) => {
    console.log(`reversing ${inputs.stringToReverse}.`);
    console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

    const reverseString = inputs.stringToReverse.split("").reverse().join("");
    return await {
      outputs: { reverseString },
    };
  },
);
