const express = require("express");
const router = express.Router();

const {
  getEmployees,
  addEmployee,
  updateEmployee
} = require("../controllers/employeeController");

// GET all employees (with search)
router.get("/", getEmployees);

// ADD new employee
router.post("/", addEmployee);

// UPDATE employee
router.put("/:id", updateEmployee);

module.exports = router;
