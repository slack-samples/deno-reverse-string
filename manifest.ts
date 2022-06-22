import {
  DefineFunction,
  DefineWorkflow,
  Manifest,
  Schema,
} from "deno-slack-sdk/mod.ts";

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

export const TestReverseWorkflow = DefineWorkflow({
  callback_id: "test_reverse",
  title: "Test Reverse Function",
  description: "test the reverse function",
  input_parameters: {
    properties: {
      "stringToReverse": {
        type: Schema.types.string,
      },
      "channel": {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["stringToReverse", "channel"],
  },
});

const reverseStep = TestReverseWorkflow.addStep(ReverseFunction, {
  stringToReverse: TestReverseWorkflow.inputs.stringToReverse,
});

TestReverseWorkflow.addStep("slack#/functions/send_message", {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep.outputs.reverseString,
});

export default Manifest({
  name: "reverse",
  description: "Reverse a string",
  icon: "assets/icon.png",
  functions: [ReverseFunction],
  workflows: [TestReverseWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
