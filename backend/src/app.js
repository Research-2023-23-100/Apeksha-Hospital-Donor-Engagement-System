import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import responseHandler from "./util/response.handler";
import router from "./api/routes";

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true, // enable credentials if necessary
	})
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	req.handleResponse = responseHandler;
	next();
});

app.use("/", router);

export default app;
