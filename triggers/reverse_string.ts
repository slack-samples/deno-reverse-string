import { Trigger } from "deno-slack-sdk/types.ts";
import ReverseWorkflow from "../workflows/reverse_string.ts";

/**
 * Triggers determine when workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/future/triggers
 */
const trigger: Trigger<typeof ReverseWorkflow.definition> = {
  type: "shortcut",
  name: "Reverse a string",
  description: "Starts the workflow to reverse a string",
  workflow: "#/workflows/reverse_string",
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
