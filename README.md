# Colls Framework CLI
A CLI tool to build project scaffolding for your new Colls API.

## Pre-requisites

- Install & run `MongoDB Server` for your local environment
- (Optional) Install `nodemon` to run your application.

## Installation
Install `colls-api-cli`

```sh
npm install colls-api-cli -g
```

Navigate to your new desired project location. Run the following command to initiate prompts to begin your build.

```sh
colls build
```

You will be asked to enter a `name`, `description`, and `author`. After you have entered the appropriate values, your project build should be complete.

Next, install all project dependencies.

```sh
npm install
```

Now your API setup has been completed and you should be able to run the main `app.js` file to serve your api.

By default, your api will be served on port `3000`. To test your first endpoint, navigate to...
http://localhost:3000/api
