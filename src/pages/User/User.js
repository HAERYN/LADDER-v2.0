import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login_func } from '../../redux/middleware/login_action';
import "./User.css";
import "../../assets/icon/FontAwesome";
import Bottom from "../../components/Bottom";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [gauge, setGauge] = useState(70);
  const [userAge, setUserAge] = useState(12);
  // const userLevel = useSelector(state => state.test_reducer.test_level);
  const userNickname = useSelector(state => state.login_reducer.user_nickname);
  const userCreate = useSelector(state => state.login_reducer.createdAt);
  const [editingName, setEditingName] = useState(false);
  const [editingAge, setEditingAge] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  // Calculate membership duration
  const currentDate = new Date();
  const createdDate = new Date(userCreate);
  const timeDiff = Math.abs(currentDate.getTime() - createdDate.getTime());
  const membershipDuration = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Difference in days

  const handleLogout = () => {
    dispatch(login_func.logout());
    navigate("/"); // 로그인 페이지로 이동
  };

  // const calculateLevelAndExp = (age) => {
  //   if (age >= 13) {
  //     return {
  //       level: "Master Level",
  //       exp: 100,
  //     };
  //   } else if (age <= 6) {
  //     return {
  //       level: "Kids Level",
  //       exp: 0,
  //     };
  //   } else {
  //     // Default level and exp
  //     return {
  //       level: `Level ${userLevel}`,
  //       exp: gauge,
  //     };
  //   }
  // };

  // const { level, exp } = calculateLevelAndExp(userAge);

  return (
    <div className="background">
      <div className="profile">
        {userNickname}님 <br/>
        어서오세요
      </div>
      <img
        className="profileImage"
        src="https://s3.ap-northeast-2.amazonaws.com/ladder.v2/Ladder-logo.png"
      />
      {/* <div className="medal">
        <FontAwesomeIcon
          icon="medal"
          size="2x"
          color="#FFB02E"
        />
        <div className="level">
          {level}
        </div>
      </div>
      <div className="gaugeBox">
        <div className="gauge" style={{ width: `${exp}%` }} />
      </div>
      <div className="percent">
        EXP {exp}%
      </div>
      <Link to="/retest">
        <button className="reTestButton"> 테스트 </button>
      </Link> */}
      <div className="studentInfo">
        <div className="infoNameItem">
          <div className="infoValue">이름</div>
          <div className="infoTitle">{userNickname}</div>
        </div>
        <div className="infoItem">
          <div className="infoValue">나이</div>
          <div className="infoTitle">{userAge}살</div>
        </div>
        <div className="infoDateItem">
          <div className="infoValue">래더와 함께한 지</div>
          <div className="infoDateTitle"> {membershipDuration} </div>
          <div className="infoValue">일 째</div>
        </div>
      </div>
      <div className="bookStyle">
        <Link to="/setting">
          <button className="loginButton"> 수정하기 </button>
        </Link>
      </div>
      <Bottom />
    </div>
  );
}

export default User;
