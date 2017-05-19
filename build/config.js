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

module.exports = {
  DEFAULT_CONFIG,
  PATH_CONFIG,
  RESOLVE_CONFIG,
  SERVER_CONFIG
};
