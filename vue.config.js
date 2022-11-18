const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/retrospective-web-client/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_global.scss";`,
      },
    },
  },
});
