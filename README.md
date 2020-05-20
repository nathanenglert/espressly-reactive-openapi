# Expressly Reactive OpenAPI

An skeleton app for bootstrapping new applications quickly. It uses things like:

- Express
- React
- OpenAPI
- ES6 Syntax
- Jest

## How to run

Before anything else, you must have node installed on your machine.

### Running Dev Server

Run on your terminal `npm run watch:dev`, the server will restart everytime you make a change in your code.

### Running Production Server

For stuff like heroku deployment, aws elasticbeanstalk, run `npm run start`

### Other scripts

- `transpile` - convert es6 and beyond code to es5 to a folder named `dist-server`
- `clean` - delete transpiled folder
- `build` - clean and transpile

## Built On

This project was built using these great repositories:

- https://github.com/anttiviljami/openapi-backend
- https://github.com/jcunanan05/express-es6-sample
