import requestLoggingMiddleware from "@middlewares/request-logging.middleware";
import responseFormatMiddleware from "@middlewares/response-format.middleware";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLoggingMiddleware);
app.use(responseFormatMiddleware);

/**
 * @description 상태 체크 API
 */
app.get("/status", (_req, res, _next) => {
  console.log("Request status API success!!");

  res.result("GOOD!");
});

export default app;
