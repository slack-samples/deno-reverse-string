import { ValidTriggerTypes } from "deno-slack-api/types.ts";

const trigger: ValidTriggerTypes = {
  type: "shortcut",
  name: "Reverse a String",
  description: "Starts the workflow to test reversing a string",
  workflow: "#/workflows/test_reverse",
};

export default trigger;
