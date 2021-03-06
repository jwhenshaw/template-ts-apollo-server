# `api-todo`

This is a template graphQL (apollo-server) service.

## Setup

Run `yarn setup` in order to install deps and generate any required env files.

### Environment variables

For local development your `.env` can be generated by running `yarn setup`.

### nvm

Run `nvm install` to switch to the correct node version.

### Startup

#### Development

```sh
$ yarn dev
```

Visit http://localhost:4099/ to see the graphQL playground.

### TypeScript

A few utilities are used to aid the use of TypeScript.

#### [typegoose](https://github.com/typegoose/typegoose)

Allows us to define Mongoose models as a class with typed properties,
using decorators to add metadata. This gives us the types for the db layer.

#### [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)

Generates types for the graphQL queries and mutations. This gives us the types
for the graphQL layer.

This process can be run using `yarn genTypes`. It is run before running the server, testing and linting, and therefore also before committing.

The config for this is in `codegen.yml`.
