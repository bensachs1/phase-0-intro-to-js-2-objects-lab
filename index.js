const employee = {
name: "John Smith",
streetAddress: "10 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key] = value;
    return employee 
}
console.log ("test")