// Write your solution in this file!

// Example employee object for testing
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Returns a new object with the updated key/value (non-destructive)
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Updates the employee object directly (destructive)
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Returns a new object without the specified key (non-destructive)
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Deletes the specified key from the employee object directly (destructive)
  delete employee[key];
  return employee;
}
