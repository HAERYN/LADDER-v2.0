const init = {
  isAuth: false,
  user_id: "",
  user_pw: "",
  user_phone: "",
  user_nickname: "",
  user_position: 3,
};

function signup_reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "AUTH":
      return {
        ...state,
        _auth_result: payload._auth_result,
      };
    case "POSITION":
      return {
        ...state,
        user_position: payload.selectedButton,
      };
    case "SIGNDATA":
      return {
        ...state,
        user_id: payload.email,
        user_pw: payload.password,
        user_phone: payload.phoneNumber,
        user_nickname: payload.name,
      };
    default:
      return state;
  }
}

export default signup_reducer;
