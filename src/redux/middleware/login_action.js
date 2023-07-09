import axios from "axios";

function login(user_id, user_pw) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://127.0.0.1:8080/login",
      data: {
        user_id,
        user_pw,
      },
    });
    let user_nickname = user.data.user_nickname;
    let user_position = user.data.user_position;
    let createdAt = user.data.createdAt;
    if (user.data) {
      dispatch({
        type: "LOGIN",
        payload: { user_id, user_nickname, user_position, createdAt },
      });
    } else {
      alert("아이디와 비밀번호를 바르게 입력해주세요");
    }
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT" });
  };
}

export const login_func = { login, logout };
