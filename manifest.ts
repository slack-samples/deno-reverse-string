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
  icon: "assets/icon.png",
  functions: [ReverseFunction],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
