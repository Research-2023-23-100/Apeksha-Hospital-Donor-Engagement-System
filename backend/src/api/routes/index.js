import { Router } from "express";
import controller from "../controllers";

const router = Router();

router.get("/", (req, res, next) => {
	res.send("Apeksha Hospital Engagement System API");
	next();
});

// Staff endpoints
router.post("/staff/register", controller.registerStaff);
router.post("/staff/login", controller.loginStaff);
router.get("/staff", controller.getAllStaff);
router.get("/staff/:id", controller.getOneStaff);

// Donor endpoints
router.post("/donor/register", controller.registerDonor);
router.post("/donor/login", controller.loginDonor);

export default router;
