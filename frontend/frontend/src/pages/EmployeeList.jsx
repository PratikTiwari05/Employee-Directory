import { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";
import EmployeeForm from "../components/EmployeeForm";
import {
  getEmployees,
  searchEmployees,
  addEmployee,
  updateEmployee
} from "../services/employeeServices";

/**
 * Displays and manages the employee directory
 */
function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // load employees on initial render
  useEffect(() => {
    fetchEmployees();
  }, []);

  /**
   * Fetches all employees from backend
   */
  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  /**
   * Handles search input change
   * @param {string} term - search keyword
   */
  const handleSearch = async (term) => {
    setSearchTerm(term);

    if (term.trim() === "") {
      fetchEmployees();
    } else {
      const data = await searchEmployees(term);
      setEmployees(data);
    }
  };

  /**
   * Sets selected employee for edit
   * @param {Object} employee - employee details
   */
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  /**
   * Handles add or update employee action
   * @param {Object} employeeData - form data
   */
  const handleFormSubmit = async (employeeData) => {
    if (selectedEmployee) {
      await updateEmployee(selectedEmployee.id, employeeData);
      setSelectedEmployee(null);
    } else {
      await addEmployee(employeeData);
    }

    fetchEmployees();
  };

  return (
    <div style={{ padding: "20px" }}  className="container">
      <h2>Employee Directory</h2>

      {/* employee add/edit form */}
      <EmployeeForm
        onSubmit={handleFormSubmit}
        selectedEmployee={selectedEmployee}
      />

      {/* search employees */}
      <SearchBar value={searchTerm} onSearch={handleSearch} />

      {/* employee list */}
      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          employee={emp}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
