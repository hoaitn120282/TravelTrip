const express = require("express");
const path = require("path");
const requireContext = require("require-context");
/**
 * Create Express server.
 */
const app = express();
app.disable("etag");

/**
 * Import all routes.
 */
// You should change version folder in the below config. For example: v1/v2/vx
const reqRoutes = requireContext(
  "./",
  true,
  /^\.\/modules\/v1\/.*\/routes\/([\w]+\.js)$/
);
reqRoutes.keys().map(file => {
  const fileName = path.basename(file);
  const routes = reqRoutes(file);
  const [routeName] = fileName.split(".");
  const { routePath = `/${routeName}` } = routes;
  app.use(routePath, routes.default);
});

module.exports = app;
