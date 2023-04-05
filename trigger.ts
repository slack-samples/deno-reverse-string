import { Trigger } from "deno-slack-sdk/types.ts";
import { TestReverseWorkflow } from "./manifest.ts";

const trigger: Trigger<typeof TestReverseWorkflow.definition> = {
  type: "shortcut",
  name: "Reverse a String",
  description: "Starts the workflow to test reversing a string",
  workflow: "#/workflows/test_reverse",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
    channel: {
      value: "{{data.channel_id}}",
    },
  },
};

export default trigger;
