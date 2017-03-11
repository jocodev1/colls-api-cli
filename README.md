# Colls Framework CLI
A CLI tool to build project scaffolding for your new Colls API.

## Installation
Install `colls-api-cli`

```sh
npm install colls-api-cli -g
```

Navigate to your new desired project location.

Run the following command to initiate prompts to begin your build.

```sh
colls build
```

You will be asked to enter a `name`, `description`, and `author`. After you have entered the appropriate values, your project build should be complete.

Next, install all project dependencies.

```sh
npm install
```

Now your new API setup has been completed.

## Running the API

I would personally recommend installing `nodemon` to serve your api on your local environment.

```sh
npm install nodemon -g
```

Nodemon makes it much easier for development. You can change any code within the `app.js` code structure and nodemon will automatically apply changes and restart the server as soon as you save the changes in your files.

To boot up your server, simply run the following command.

```sh
nodemon app
```

## Try it out!

By default, your api will be served on port `3000`. To test your first endpoint, navigate to...
http://localhost:3000/api
