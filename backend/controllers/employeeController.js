const db=require("../db")

/**
 * Get all employees
 * Supports search by name or department
 */
const getEmployees = async (req, res) => {
  try {
    const { search } = req.query;

    let query = "SELECT * FROM employees";
    let values = [];

    if (search) {
      query += " WHERE name LIKE ? OR department LIKE ?";
      values.push(`%${search}%`, `%${search}%`);
    }

    const [rows] = await db.query(query, values);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch employees" });
  }
};

/**
 * Add a new employee
 */
const addEmployee = async (req, res) => {
  try {
    const { name, role, department, email } = req.body;

    const query =
      "INSERT INTO employees (name, role, department, email) VALUES (?, ?, ?, ?)";

    await db.query(query, [name, role, department, email]);

    res.status(201).json({ message: "Employee added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add employee" });
  }
};

/**
 * Update employee details
 */
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, department, email } = req.body;

    const query =
      "UPDATE employees SET name=?, role=?, department=?, email=? WHERE id=?";

    await db.query(query, [name, role, department, email, id]);

    res.status(200).json({ message: "Employee updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update employee" });
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee
};
