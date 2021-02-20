const INITIAL_STATE = {
    formInputs: {
        "Auto Purchase Price": 0,
        "Estimated Yearly Income": 0,
        "Estimated Credit Score": 0
    }
  };
  
  const applySetOrder = (state, action) => ({
    ...state,
    formInputs: action.formInputs
  });
  
  function interactionsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'SET_FORM_INPUTS' : {
        console.log(action.interactions)
        return applySetOrder(state, action);
      }
      default : return state;
    }
  }
  
  export default interactionsReducer;