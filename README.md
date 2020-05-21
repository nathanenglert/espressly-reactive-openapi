# Expressly Reactive OpenAPI

An skeleton app for bootstrapping new applications quickly. It uses things like:

- Express
- React
- OpenAPI
- Antd
- Jest

## Building the server component

### Designing the API

Everything starts with the API definition. You can find a sample YAML file at `server/reference/openapi.v1.yaml`.

Using the OpenAPI spec, you can first document the inputs and outputs of the interface you're building. Be as thorough as possible, this document can be used for documentation, routing, and validation.

**IMPORTANT** | Each path within the OpenAPI document must have an `operationId`.

### Implementing the API

Following Express standards, the server component is setup within `server/src/app.js`. Not following Express standards, we use `operations` and the [OpenAPI-Backend](https://github.com/anttiviljami/openapi-backend) rather than `routes` and `controllers`.

For information on registering operations, take a look at [Registering Handlers for Operations](https://github.com/anttiviljami/openapi-backend#registering-handlers-for-operations).

## Building the client component

**WORK IN PROGRESS**

## How to run

Before anything else, you must have node installed on your machine.

### Running Dev Server

Running `yarn dev` will launch both the client and server components.

## Built On

This project was built using these great repositories:

- https://github.com/anttiviljami/openapi-backend
- https://github.com/jcunanan05/express-es6-sample
