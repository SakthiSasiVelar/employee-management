

function useFilter(employees , filterId){
    const employee = employees.find((employee) => employee.id == filterId);
    return employee;
}

export default useFilter;