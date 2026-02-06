/**
 * Handles employee search input
 * @param {string} value - current search value
 * @param {Function} onSearch - function to handle search input
 */
function SearchBar({ value, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or department"
      value={value}
      // call search handler on input change
      onChange={(e) => onSearch(e.target.value)}
      style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
    />
  );
}

export default SearchBar;
