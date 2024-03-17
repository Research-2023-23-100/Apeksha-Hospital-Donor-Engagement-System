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
router.get("/staff/", controller.getAllStaff);
router.get("/staff/:id", controller.getOneStaff);
router.put("/staff/update/:id", controller.updateStaff);
router.delete("/staff/delete/:id", controller.deleteStaff);

// Donor endpoints
router.post("/donor/register", controller.registerDonor);
router.post("/donor/login", controller.loginDonor);
router.get("/donor/", controller.getAllDonor);
router.get("/donor/:id", controller.getOneDonor);
router.put("/donor/update/:id", controller.updateDonor);
router.delete("/donor/delete/:id", controller.deleteDonor);
router.put("/donor/status/:id", controller.changeStatus);

// Organization endpoints
router.post("/org/register", controller.registerOrganization);
router.post("/org/login", controller.loginOrganization);
router.get("/org/", controller.getAllOrganization);
router.get("/org/:id", controller.getOneOrganization);
router.put("/org/update/:id", controller.updateOrganization);
router.delete("/org/delete/:id", controller.deleteOrganization);
router.put("/org/donor/update/:id", controller.updateDonorStatus);
router.get("/org/donor/status", controller.getDonorStatus);

// Essentials Items endpoints
router.post("/item/create", controller.insertItem);
router.get("/item/", controller.getAllItems);
router.get("/item/:id", controller.getItemDetails);
router.delete("/item/delete/:id", controller.deleteItem);
router.put("/item/increment/:id", controller.incrementQuantity);
router.put("/item/decrement/:id", controller.decrementQuantity);

// Campagin endpoints
router.post("/campagin/create", controller.insertCampagin);
router.get("/campagin/", controller.getAllCampagin);
router.get("/campagin/:id", controller.getCampaginDetails);
router.put("/campagin/update/:id", controller.editCampaginDetails);
router.delete("/campagin/delete/:id", controller.deleteCampagin);

export default router;
