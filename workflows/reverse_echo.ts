import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { ReverseString } from "../functions/reverse.ts";

export const ReverseEchoString = DefineWorkflow("reverse_echo", {
  title: "Reverse, echo",
  description: "Reverses a string, echos it out",
  input_parameters: {
    required: ["stringToReverse", "channel"],
    properties: {
      stringToReverse: {
        type: Schema.types.string,
        description: "The string to reverse",
      },
      channel: {
        type: Schema.slack.types.channel_id,
        description: "Channel to echo the reversed string",
      },
    },
  },
});

const reverseStep = ReverseEchoString.addStep(ReverseString, {
  stringToReverse: ReverseEchoString.inputs.stringToReverse,
});

ReverseEchoString.addStep(Schema.slack.functions.SendMessage, {
  channel_id: ReverseEchoString.inputs.channel,
  message: `Your string in reverse is *${reverseStep.outputs.reverseString}*`,
});
