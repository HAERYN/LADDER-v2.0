import axios from "axios";

function email_auth(email, auth_num) {
  // console.log(email, auth_num)
  return async (dispatch, getState) => {
    const auth = await axios({
      method: "post",
      url: "http://127.0.0.1:8080/email_auth",
      data: {
        email: email,
        auth_num: auth_num,
      },
    });
    console.log(email, auth_num);
    let _auth_result = auth.data;
    if (auth.data) {
      console.log("보냈냐?");
      dispatch({
        type: "AUTH",
        payload: { _auth_result },
      });
      alert("인증메일 전송");
    } else {
      alert("이미 가입된 메일 주소 입니다.");
      console.log(auth.data);
    }
  };
}

function sign_up(user_id, user_pw, user_phone, user_position, user_nickname) {
  console.log(user_id, user_pw, user_phone, user_position, user_nickname);
  return async (dispatch, getState) => {
    const new_user = await axios({
      method: "post",
      url: "http://15.164.222.179/sign_up",
      data: {
        user_id,
        user_pw,
        user_phone,
        user_position,
        user_nickname,
      },
    });
    if (new_user.data) {
      console.log("uuuuuu");
      // dispatch({
      //   type: "SIGNUP",
      //   payload: { user_id, user_pw, user_position, user_nickname },
      // });
    } else {
      alert("중복됨(이메일 또는 닉네임)");
    }
  };
}

export const sign_function = { email_auth, sign_up };
