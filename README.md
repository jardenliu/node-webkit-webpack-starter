# node-webkit-webpack-starter
  A [Nwjs(node-webkit)](https://github.com/nwjs/nw.js) development starter using Webpack.

* Heavily commented webpack configuration with reasonable defaults
* ES6, and ES7 support with babel
* Development server using express with hot reload
* No gulp and no grunt, just npm scripts.

> Warning: Make sure you're using Node.js and NPM

## Quick start
> Clone/Download the repo then edit `index.js` inside `/app`
```
  #clone this repo
  $ git clone https://github.com/jarden-liu/node-webkit-webpack-starter.git my-nw-app

  # change directory to your app
  $ cd my-nw-app

  # install the dependencies with npm or cnpm(Chinese Mirror)
  $ npm install

  # install nwjs sdk
  $ sudo npm install -g nw --nwjs_build_type=sdk

  # start the server
  $ npm dev
```

## Table of Contents
* [Configure](#configure)
* [Getting Started](#getting-started)
  * [Dependencies](#dependencies)
  * [Installing](#installing)
  * [Running the app](#running-the-app)
  * [Pack the app](#pack-the-app)
* [License](#license)

## Configure
> Configure your project by edit `config.js` inside `/build`
```
const DEFAULT_CONFIG = {
  TITLE: 'node-webkit'        // index.html head title
};

const SERVER_CONFIG = {
  PORT: 8081                 //local dev server port
};

const PATH_CONFIG = {
  MAIN: 'app',              // app entry dir
  OUTPUT: 'dist'            // app output dir
};

const RESOLVE_CONFIG = {
  EXTENSIONS: ['.js', '.json'],    //webpck extensions
  ALIAS:{}                          //webpck alias
};

```
> You can also configure `webpack.config.js`、`webpack.dev.js`、`webpack.prod.js`

## Getting Started
### Dependencies
What you need to run this app:
* `node` and `nw` (Use NVM)
* this last version is recommended

### Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

### Running the app
After you have installed all dependencies you can now run the app with:
```
 npm start
```
It will start a local server using `express` with `webpack-dev-middleware` which will watch,rebuild,reload for you.The port will be displayed to you in terminal.As the same time, the nwjs client will auto start.

### Pack the app
After you've developed app, you can build and compress the app with:
```
  npm run build
```
then the bundle files are placed on the output dir `e.g. /dist`

How to package your app by dist file?

see [http://docs.nwjs.io/package-your-app](http://docs.nwjs.io/en/latest/For%20Users/Package%20and%20Distribute/#package-your-app)

## License
MIT
