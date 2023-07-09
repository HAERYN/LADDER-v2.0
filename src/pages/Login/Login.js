import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { login_func } from '../../redux/middleware/login_action';
import { useDispatch, useSelector } from 'react-redux';
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user_data = useSelector((state) => state.login_reducer);
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();

  const user_id = email; // email 값을 user_id로 사용

  const handleLogin = () => {
    dispatch(login_func.login(user_id, password));
  };
  
  // useEffect(() => {
  //   if (user_data.user_id && user_data.user_nickname && user_data.user_position) {
  //     navigate("/Home");
  //   }
  // }, [user_data.user_id, user_data.user_nickname, user_data.user_position, navigate]);

  return (
    <div className="background">
      <img className="logo" src={"https://s3.ap-northeast-2.amazonaws.com/ladder.v2/Ladder-logo.png"} />
      <input
        className="mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
      />
      <div className="pw">
        <input
          className="pw-input"
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
            color="#9885B8"
          />
        </div>
      </div>

      <div className="buttonStyle">
        <Link to="/Home">
          <button className="loginButton" onClick={handleLogin}> 로그인 </button>
        </Link>
        <Link to="/Terms">
          <button className="signButton">계정이 없으신가요? </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
