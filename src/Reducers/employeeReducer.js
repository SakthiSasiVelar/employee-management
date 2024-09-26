
const employeeReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return [...state, action.payload];
      case 'COPY_EMPLOYEE':
         return [...action.payload];
      default:
        return state;
    }
  };
  
  export default employeeReducer;
  