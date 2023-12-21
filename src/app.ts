import express from "express";

const app = express();

/**
 * @description 상태 체크 API
 */
app.get("/status", (req, res, next) => {
  console.log("Request status API success!!");

  res.send("GOOD!");
});

export default app;
