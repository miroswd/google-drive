import { logger } from "./logger.js";

export default class Routes {
  io;
  constructor() {}

  setSocketInstance(io) {
    this.io = io;
  }

  async defaultRoute(request, response) {
    // rota que nao existe 404
    response.end("Hello World!");
  }

  async options(request, response) {
    response.writeHead(204); // se a rota está disponível a receber algo
    response.end("Hello World!");
  }

  async post(request, response) {
    logger.info("post");
    response.end();
  }

  async get(request, response) {
    logger.info("get");
    response.end();
  }

  handler(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*"); // liberando o cors
    const chosen = this[request.method.toLowerCase()] || this.defaultRoute; // POST, GET... - escolhendo a rota de forma dinâmica

    return chosen.apply(this, [request, response]); // apply é como se fosse chosen(), porém fixando o this
  }
}
