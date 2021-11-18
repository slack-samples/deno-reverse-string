# Next-gen Slack platform project template - Reverse String
This repo contains a sample project and embedded lightweight SDK of a Typescript based project for the new Deno runtime. 

The main file that brings it all together is the `project.ts` file.  So far `functions`, `workflows`, `triggers` and `tables` are supported and those should each be created in a file per, under each corresponding directory. `functions/reverse.ts` has a simple sample. After you create a new function or workflow make sure you add it to the `Project` object in `project.ts`. 

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

You can write tests for your function, see `functions/reverse_test.ts` for a sample. Test base filenames should be suffixed with `_test`. To run tests just run:

```bash
slack deno test
```

