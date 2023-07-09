import axios from "axios";

function sound_count_check(user_id) {
  return async (dispatch, getState) => {
    const interval = setInterval(async () => {
      try {
        const count_data = await axios.post(
          "http://127.0.0.1:8080/record_check",
          {
            user_id,
          }
        );
        if (count_data.data) {
          clearInterval(interval);
          dispatch({ type: "COUNT-CHECK", payload: count_data.data });
        } else {
          alert("카운트 값 생성이나 읽기 실패");
        }
      } catch (error) {
        console.log("카운트 값 생성이나 읽기 실패:", error);
      }
    }, 1000);
  };
}

function sound_transfer(formData) {
  return async (dispatch, getState) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      await axios
        .post("http://127.0.0.1:8080/sound_transfer", formData, config)
        .then((res) => {
          if (res.data) {
            console.log("음성 데이터 저장 성공");
          } else {
            console.log("음성 데이터 저장 실패");
          }
        })
        .catch((err) => {
          console.log("에러", err);
        });
    } catch (error) {
      console.log("음성 전송 실패:", error);
    }
  };
}

export const sound_function = { sound_transfer, sound_count_check };
