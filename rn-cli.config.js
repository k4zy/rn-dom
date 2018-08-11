"use strict";

var config = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx", "js", "jsx"];
  },
  getPlatforms() {
    return ["dom"];
  },
  getProvidesModuleNodeModules() {
    return ["react-native", "react-native-dom"];
  }
};

module.exports = config;
