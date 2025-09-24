const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("public/data/db.json"); // Updated path
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.use(middlewares);
server.use("/api", router);

module.exports = server;
