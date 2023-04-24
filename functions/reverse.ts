import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

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
      reverseString: {
        type: Schema.types.string,
        description: "The string in reverse",
      },
    },
    required: ["reverseString"],
  },
});

export default SlackFunction(
  ReverseFunctionDefinition,
  ({ inputs }) => {
    const reverseString = inputs.stringToReverse.split("").reverse().join("");
    return {
      outputs: { reverseString },
    };
  },
);
