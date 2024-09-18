 import{ Router } from "express";
 import TestController from "../Controllers/TesteController.js";

 const TestRouter = Router();

 TestRouter.get("/teste", TestController.PrimeiraFuncao);
 TestRouter.get("/get", TestController.get);
 TestRouter.post("/post", TestController.post);
 TestRouter.put("/put", TestController.put);
 TestRouter.delete("/delete", TestController.delete);

 export default TestRouter;