import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in workflows.
 * https://api.slack.com/automation/functions/custom
 */
export const ReverseFunctionDefinition = DefineFunction({
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
      reversedString: {
        type: Schema.types.string,
        description: "The string in reverse",
      },
    },
    required: ["reversedString"],
  },
});

export default SlackFunction(
  ReverseFunctionDefinition,
  ({ inputs }) => {
    const reversedString = inputs.stringToReverse.split("").reverse().join("");
    return {
      outputs: { reversedString },
    };
  },
);
