require("babel-register")();
/* eslint-disable */
require.extensions[".css"] = function(){
  console.log("mocking css behavior, ignoring...");
}

