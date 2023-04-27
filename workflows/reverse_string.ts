import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { ReverseFunctionDefinition } from "../functions/reverse.ts";

/**
 * A workflow is a set of steps that are executed in order.
 * Each step in a workflow is a function.
 * https://api.slack.com/automation/workflows
 */
const ReverseWorkflow = DefineWorkflow({
  callback_id: "reverse_string",
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

const formData = ReverseWorkflow.addStep(Schema.slack.functions.OpenForm, {
  title: "Reverse string form",
  submit_label: "Submit form",
  description: "Submit a string to reverse",
  interactivity: ReverseWorkflow.inputs.interactivity,
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
        default: ReverseWorkflow.inputs.channel,
      },
    ],
  },
});

const reverseStep = ReverseWorkflow.addStep(ReverseFunctionDefinition, {
  stringToReverse: formData.outputs.fields.stringInput,
});

ReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: formData.outputs.fields.channel,
  message: reverseStep.outputs.reversedString,
});

export default ReverseWorkflow;
