const init = {
  isLogin: false,
  user_id: "ddd",
  user_nickname: "",
  user_position: "",
  createdAt: "",
  user_age:""
};

function login_reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        user_id: payload.user_id,
        user_nickname: payload.user_nickname,
        user_position: payload.user_position,
        createdAt: payload.createdAt
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        user_id: "",
        user_nickname: "",
        user_position: "",
        createdAt: ""
      };
    default:
      return state;
  }
}

export default login_reducer;
