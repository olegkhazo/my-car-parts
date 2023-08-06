/* eslint-disable */
const path = require("path");
const { gitDescribeSync } = require("git-describe");

const gitInfo = gitDescribeSync();

process.env.VUE_APP_VERSION = gitInfo.distance ? gitInfo.raw : gitInfo.tag;

module.exports = {
  outputDir: "../frontend_assets",
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/variables"`,
      },
      scss: {
        additionalData: `@import "~@/styles/variables";`,
      },
    },
  },

  // baseUrl: IS_PRODUCTION
  // ? 'http://cdn123.com'
  // : '/',
  // For Production, replace set baseUrl to CDN
  // And set the CDN origin to `yourdomain.com/static`
  // Whitenoise will serve once to CDN which will then cache
  // and distribute
  devServer: {
    proxy: {
      "/api*": {
        // Forward frontend dev server request for /api to node dev server
        target: "http://localhost:3000/",
      },
      // "/admin-*": {
        // Forward frontend dev server request for /api to django dev server
        // target: "http://localhost:3000/",
      // },
    },
  }
};
