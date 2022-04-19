# Next-gen Slack platform project template - Reverse String

This repo contains a sample project and embedded lightweight SDK of a Typescript
based project for the new Deno runtime.

The main file that handles the generation of your app's manifest is the
`manifest.ts` file. So far it supports defining `functions`, `types`, and
`datastores`. To define the runtime logic for functions, the `source_file`
parameter should be set as a relative path from your project root to the file
where that logic is defined and exported as default. The `functions/reverse.ts`
file has a simple sample. After you create a new function, make sure you add it
to the `Manifest` object in `manifest.ts` and point to your new function runtime
log file.

## Setup

Create a new project using this as repo as a template.

```bash
slack create -t slackapi/deno-reverse-string
```

## Running it locally

```bash
slack run
```

## Deploying to Slack's Hosting

```bash
slack deploy
```

## Testing

You can write tests for your function, see `functions/reverse_test.ts` for a
sample. Test base filenames should be suffixed with `_test`. To run tests just
run:

```bash
slack deno test
```
