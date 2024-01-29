import { Router } from "express";
import controller from "../controllers";

const router = Router();

router.get("/", (req, res) => {
	res.send("Sample API");
});

router.post("/sample", controller.insert);


export default router;