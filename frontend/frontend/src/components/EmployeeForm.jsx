import { useEffect, useState } from "react";

/**
 * Form used to add or edit employee details
 * @param {Function} onSubmit - function to submit form data
 * @param {Object} selectedEmployee - employee data for edit
 */
function EmployeeForm({ onSubmit, selectedEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    department: "",
    email: ""
  });

  // when edit button is clicked, fill form with employee data
  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    }
  }, [selectedEmployee]);

  // update form values on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit for add or update
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    // clear form after adding employee
    setFormData({
      name: "",
      role: "",
      department: "",
      email: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>{selectedEmployee ? "Edit Employee" : "Add Employee"}</h3>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        required
      />

      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">
        {selectedEmployee ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default EmployeeForm;
