import { DefineWorkflow, Manifest, Schema } from "deno-slack-sdk/mod.ts";
import { ReverseFunction } from "./functions/reverse.ts";

export const TestReverseWorkflow = DefineWorkflow({
  callback_id: "test_reverse",
  title: "Test Reverse Function",
  description: "test the reverse function",
  input_parameters: {
    properties: {
      interactivity: {
        type: Schema.slack.types.interactivity,
      },
      channel: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["interactivity"],
  },
});

const formData = TestReverseWorkflow.addStep(Schema.slack.functions.OpenForm, {
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
      },
      {
        name: "channel",
        title: "Post in",
        type: Schema.slack.types.channel_id,
        default: TestReverseWorkflow.inputs.channel,
      },
    ],
  },
});

const reverseStep = TestReverseWorkflow.addStep(ReverseFunction, {
  stringToReverse: formData.outputs.fields.stringInput,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: formData.outputs.fields.channel,
  message: reverseStep.outputs.reverseString,
});

export default Manifest({
  name: "reverse",
  description: "Reverse a string",
  icon: "assets/icon.png",
  workflows: [TestReverseWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
