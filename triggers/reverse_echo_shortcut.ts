import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { ReverseEchoString } from "../workflows/reverse_echo.ts";

export const ReverseEchoShortcut = DefineTrigger("reverse_echo_shortcut", {
  type: TriggerTypes.Shortcut,
  name: "Reverse",
  description: "Reverses a string and echoes it in-channel",
})
  .runs(ReverseEchoString)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id,
  }));
