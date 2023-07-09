import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Ready.css";
import { useDispatch, useSelector } from "react-redux";
import { sign_function } from "../../redux/middleware/signup_action";

function Ready() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.signup_reducer);
  console.log(user_data);

  const send_user_data = () => {
    dispatch(
      sign_function.sign_up(
        user_data.user_id,
        user_data.user_pw,
        user_data.user_phone,
        user_data.user_position,
        user_data.user_nickname,
      )
    );
    navigate("/");
  };

  return (
    <div className="background">
      <img className="readyLogo" src="https://s3.ap-northeast-2.amazonaws.com/ladder.v2/Ladder-logo.png" />
      <div className="readyTitle">
        환영합니다! <br />
        추억의 사다리를 함께 타봐요
      </div>
      <div className="readyButtonStyle">
        <button className="readyButton" onClick={send_user_data}>
          시작하기{" "}
        </button>
      </div>
    </div>
  );
}

export default Ready;
