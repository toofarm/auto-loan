const INITIAL_STATE = {
    approval: null
  };
  
  const applySetOrder = (state, action) => ({
    ...state,
    approval: action.approval
  });
  
  function approvalReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'SET_APPROVAL_STATE' : {
        console.log(action.approval)
        return applySetOrder(state, action);
      }
      default : return state;
    }
  }
  
  export default approvalReducer;