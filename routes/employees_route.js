
const express = require("express");
const router = express.Router();
const employeeController = require('../controllers/employeeController');
router.post("/", employeeController.create_employee);
router.put("/", employeeController.update_employee); // image upload mechanism
router.get('/', employeeController.fetch_employee); //



module.exports = router;
