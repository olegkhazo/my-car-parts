require("dotenv").config();
import express from "express";
import config from "config";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";

const app = express();

const port = config.get("port");

app.listen(port, () => {
    log.info(`app started at http://localhost:${port}`);
    
    connectToDb();
});