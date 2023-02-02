import { DefineWorkflow, Manifest, Schema } from "deno-slack-sdk/mod.ts";

export const TestReverseWorkflow = DefineWorkflow({
  callback_id: "test_reverse",
  title: "Test Reverse Function",
  description: "test the reverse function",
  input_parameters: {
    properties: {
      stringToReverse: {
        type: Schema.types.string,
      },
      channel: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: [],
  },
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: TestReverseWorkflow.inputs.stringToReverse,
});

export default Manifest({
  name: "reverse",
  description: "Reverse a string",
  icon: "assets/default_new_app_icon.png",
  workflows: [TestReverseWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
