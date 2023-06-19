const server = require("pushstate-server");

server.start({
  port: 8183,
  directory: "./dist",
});
