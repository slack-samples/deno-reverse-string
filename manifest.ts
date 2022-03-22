import { DefineFunction, Manifest, Schema } from "deno-slack-sdk/mod.ts";

const ReverseFunction = DefineFunction({
  callback_id: "reverse",
  title: "Reverse",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse.ts",
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
});

export default Manifest({
  name: "reverse",
  description: "Reverse a string",
  // Once Manifest APIs support this, we'll add it
  // "runtime_environment": "slack",
  runtime: "deno1.x",
  // The CLI should still read this and update the icon, then remove if from what's sent to manifest APIs
  // We could have the deno-slack-builder make sure this file is included in the `output` path if helpful
  icon: "assets/icon.png",
  functions: [ReverseFunction],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
