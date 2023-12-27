import notFoundMiddleware from "@middlewares/not-found.middleware";
import requestLoggingMiddleware from "@middlewares/request-logging.middleware";
import responseFormatMiddleware from "@middlewares/response-format.middleware";
import router from "@routes/index.route";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLoggingMiddleware);
app.use(responseFormatMiddleware);
app.use("/api", router);
app.use(notFoundMiddleware);

export default app;
