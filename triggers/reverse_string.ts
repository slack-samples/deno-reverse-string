import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import ReverseWorkflow from "../workflows/reverse_string.ts";

/**
 * Triggers determine when workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/automation/triggers
 */
const trigger: Trigger<typeof ReverseWorkflow.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Reverse a string",
  description: "Starts the workflow to reverse a string",
  workflow: `#/workflows/${ReverseWorkflow.definition.callback_id}`,
  inputs: {
    interactivity: {
      value: TriggerContextData.Shortcut.interactivity,
    },
    channel: {
      value: TriggerContextData.Shortcut.channel_id,
    },
  },
};

export default trigger;
