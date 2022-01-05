import { describe, test, expect, jest } from "@jest/globals";

import Routes from "./../../src/routes.js";

describe("#Routes test suite", () => {
  describe("#setScoketInstance", () => {
    test("setSocket should store io instance", () => {
      const routes = new Routes();

      const ioObj = {
        to: (id) => ioObj,
        emit: (event, message) => {},
      };

      routes.setSocketInstance(ioObj);

      expect(routes.io).toStrictEqual(ioObj);
    });
  });

  describe("#handler", () => {
    const defaultParams = {
      request: {
        headers: {
          "Content-Type": "multipart/form-data",
        }, // multipart para trabalhar com arquivos
        method: "",
        body: {},
      },
      response: {
        setHeader: jest.fn(), // tirando toda a dependencia de biblioteca e OS
        writeHead: jest.fn(),
        end: jest.fn(),
      },
      values: () => Object.values(defaultParams),
    }; // o q o index vai mandar pra Routes

    // test.todo("given an inexistent route it should choose default route");
    test.todo("it should set any request with cors enabled");
    test.todo("given method OPTIONS it should choose options route");
    test.todo("given method POST it should choose post route");
    test.todo("given method GET it should choose get route");

    test("given an inexistent route it should choose default route", () => {
      const routes = new Routes();
      const params = {
        ...defaultParams,
      };

      params.request.method = "inextistent";
      routes.handler(...params.values());
      expect(params.response.end).toHaveBeenCalledWith("Hello World!");
    });
  });
});
