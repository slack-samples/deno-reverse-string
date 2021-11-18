import { Project } from "slack-cloud-sdk/mod.ts";
import { ReverseString } from "./functions/reverse.ts";
import { ReverseEchoString } from "./workflows/reverse_echo.ts";
import { ReverseEchoShortcut } from "./triggers/reverse_echo_shortcut.ts";
// import the Reversals table and include it in the `tables` array
// below to store data via the Tables API
// import { Reversals } from "./tables/reversals.ts";

Project({
  name: "reverse",
  description:
    "A demo showing how to use Slack workflows, functions, and triggers",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public"],
  functions: [ReverseString],
  workflows: [ReverseEchoString],
  triggers: [ReverseEchoShortcut],
  tables: [],
  outgoingDomains: [],
});
