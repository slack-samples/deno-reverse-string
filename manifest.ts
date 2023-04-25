import { Manifest } from "deno-slack-sdk/mod.ts";
import ReverseWorkflow from "./workflows/reverse_string.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "deno-reverse-string",
  description: "Post the reversed version of a string to a selected channel",
  icon: "assets/default_new_app_icon.png",
  workflows: [ReverseWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
