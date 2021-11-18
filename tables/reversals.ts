import { DefineTable, Schema } from "slack-cloud-sdk/mod.ts";

export const Reversals = DefineTable("reversals", {
  primary_key: "id",
  columns: {
    id: {
      type: Schema.types.string,
    },
    original_string: {
      type: Schema.types.string,
    },
    reversed_string: {
      type: Schema.types.string,
    },
    user_id: {
      type: Schema.slack.types.user_id,
    },
  },
});
