export default {
  "_metadata": {
    "major_version": 2
  },
  "display_information": {
    "name": "reverse"
  },
  // Once Manifest APIs support this, we'll add it
  // "runtime_environment": "slack",
  // The CLI should still read this and update the icon, then remove if from what's sent to manifest APIs
  // We could have the deno-slack-builder make sure this file is included in the `output` path if helpful
  "icon": "assets/icon.png",
  "features": {
    "app_home": {
      "home_tab_enabled": false,
      "messages_tab_enabled": false,
      "messages_tab_read_only_enabled": false
    },
    "bot_user": {
      "display_name": "reverse"
    }
  },
  "oauth_config": {
    "scopes": {
      "bot": [
        "commands",
        "chat:write",
        "chat:write.public"
      ]
    }
  },
  "functions": {
    "reverse": {
      "title": "Reverse",
      "description": "Takes a string and reverses it",
      "source_file": "functions/reverse.ts",
      "input_parameters": {
        "required": [
          "stringToReverse"
        ],
        "properties": {
          "stringToReverse": {
            "type": "string",
            "description": "The string to reverse"
          }
        }
      },
      "output_parameters": {
        "required": [
          "reverseString"
        ],
        "properties": {
          "reverseString": {
            "type": "string",
            "description": "The string in reverse"
          }
        }
      }
    }
  },
  "outgoing_domains": []
}