import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sign_function } from "../../redux/middleware/signup_action";
import "./Signup.css";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkNumber, setCheckNumber] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6자리 무작위 숫자 생성
    return randomNumber.toString();
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (!email || !password || !phoneNumber || !checkNumber) {
      alert("모든 항목을 입력해주세요.");
    } else {
      dispatch({
        type: "SIGNDATA",
        payload: { email, password, phoneNumber, name },
      });
      //   console.log("dd");
      navigate("/ready");
    }
  };

  const email_auth = () => {
    dispatch(sign_function.email_auth(email, generateRandomNumber()));
    // console.log(email, generateRandomNumber())
  }

  return (
    <div className="background">
      <img
        className="Logo"
        src="https://s3.ap-northeast-2.amazonaws.com/ladder.v2/Ladder-logo.png"
      />
      <form>
        <input
          className="signupName"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          className="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <button 
          className="checkButton" 
          onClick={() => email_auth()}
        >
          전송
        </button>
        <input
          className="checkNumber"
          type="number"
          value={checkNumber}
          onChange={(e) => setCheckNumber(e.target.value)}
          placeholder="인증번호"
          maxLength={6}
        />
        <div className="password">
          <input
            className="password-input"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
          <div
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              color="white"
            />
          </div>
        </div>
        <input
          className="phoneNumber"
          type="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="전화번호"
        />
        
      </form>
      <div className="termsStyle">
        <Link to="/terms">
          <button className="signupBackButton"> 뒤로가기 </button>
        </Link>
        <button className="sigininNextButton" onClick={() => handleSubmit()}>
          다음
        </button>
      </div>
    </div>
  );
}

export default Signup;
