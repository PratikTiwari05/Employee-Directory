const API_URL = "http://localhost:5000/api/employees";

/**
 * Fetch all employees
 */
export const getEmployees = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

/**
 * Search employees by name or department
 */
export const searchEmployees = async (searchTerm) => {
  const response = await fetch(`${API_URL}?search=${searchTerm}`);
  return response.json();
};

/**
 * Add a new employee
 */
export const addEmployee = async (employeeData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employeeData)
  });

  return response.json();
};

/**
 * Update an existing employee
 */
export const updateEmployee = async (id, employeeData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employeeData)
  });

  return response.json();
};
