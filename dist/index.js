module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(104);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 104:
/***/ (function() {

async function run() {
  try {
    const ref = process.env.GITHUB_REF;

    let env = '';
    const data = ref.match(/(?<=\/)[\w\.-]+/g);
    if (data[0] == 'tags') {
      const version = data[1];

      env = version.match(/(?<=-)\w+/g);
      if (env == null) {
        env = 'production';
      } else {
        env = env[0];
      }
    } else {
      if (data[1] == 'master') {
        env = 'staging';
      } else {
        env = 'development';
      }
    }

    core.setOutput('env', env);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()


/***/ })

/******/ });