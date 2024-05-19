import { Router } from "express";
import controller from "../controllers";
const upload = require("../../util/slipupload");

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
router.put("/donor/update-donated-count/:id", controller.updateDonatedCount);

// Organization endpoints
router.post("/org/register", controller.registerOrganization);
router.post("/org/login", controller.loginOrganization);
router.get("/org/", controller.getAllOrganization);
router.get("/org/:id", controller.getOneOrganization);
router.put("/org/update/:id", controller.updateOrganization);
router.delete("/org/delete/:id", controller.deleteOrganization);
router.put("/org/update-status/:id", controller.updateOrganizerStatus);
router.post("/org/status", controller.getOrganizerStatus);

// Essentials Items endpoints
router.post("/item/create", controller.insertItem);
router.get("/item/", controller.getAllItems);
router.get("/item/:id", controller.getItemDetails);
router.delete("/item/delete/:id", controller.deleteItem);
router.put("/item/increment/:id", controller.incrementQuantity);
router.put("/item/decrement/:id", controller.decrementQuantity);

// Campaign endpoints

router.post("/campaign/create", upload.single("marketingSlip"), controller.createCamp);
router.get("/campaign/", controller.getAllCamps);
router.get("/campaign/:id", controller.getCampById);
router.put("/campaign/update/:id", controller.updateCamp);
router.delete("/campaign/delete/:id", controller.deleteCamp);
router.put("/camp/update-staff/:id", controller.updateBloodCampStaff);
router.put("/camp/update-required-items/:id", controller.updateBloodRequiredItems);
router.put("/camp/update-account-status/:id", controller.updateBloodCampAccountStatus);

// Donation Request endpoints
router.post("/donation/request", controller.insertDonation);
router.get("/donation/request/", controller.getAllDonation);
router.get("/donation/request/:id", controller.getDonationDetails);
router.delete("/donation/request/delete/:id", controller.deleteDonation);
router.put("/donation/request/status/:id", controller.changeDonationStatus);

export default router;
