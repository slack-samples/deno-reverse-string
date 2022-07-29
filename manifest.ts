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
      interactivity: {
        type: "slack#/types/interactivity",
      },
    },
    required: [],
  },
});

const formData = TestReverseWorkflow.addStep("slack#/functions/send_form", {
  title: "Reverse string form",
  submit_label: "Submit form",
  description: "Submit a string to reverse",
  interactivity: TestReverseWorkflow.inputs.interactivity,
  fields: {
    required: ["channel", "stringInput"],
    elements: [
      {
        name: "stringInput",
        title: "String input",
        type: Schema.types.string,
        is_required: true,
      },
      {
        name: "channel",
        title: "Post in",
        type: Schema.slack.types.channel_id,
        is_required: true,
      },
    ],
  },
});

const reverseStep = TestReverseWorkflow.addStep(ReverseFunction, {
  stringToReverse: formData.outputs.fields.stringInput,
});

TestReverseWorkflow.addStep("slack#/functions/send_message", {
  channel_id: formData.outputs.fields.channel,
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
