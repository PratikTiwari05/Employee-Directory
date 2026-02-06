/**
 * EmployeeCard component
 * Shows basic employee information
 * @param {Object} employee - employee details
 * @param {Function} onEdit - function to trigger edit action
 */
function EmployeeCard({ employee, onEdit }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "4px"
      }}
      className="card"
    >
      <h4>{employee.name}</h4>
      <p>Role: {employee.role}</p>
      <p>Department: {employee.department}</p>

      {/* edit button */}
      <button onClick={() => onEdit(employee)}>Edit</button>
    </div>
  );
}

export default EmployeeCard;
