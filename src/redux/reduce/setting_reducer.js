const init = {
    user_nickname: "",
    user_age:""
  };
  
  function login_reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
      case "SETTING":
        return {
          ...state,
          user_nickname: "",
          user_age:""
        };
      default:
        return state;
    }
  }
  
  export default login_reducer;
  