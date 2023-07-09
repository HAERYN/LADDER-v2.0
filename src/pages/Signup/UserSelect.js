import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChildren,
  faPeopleGroup,
  faHomeUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserSelect.css";
import { useDispatch, useSelector } from "react-redux";

function UserSelect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.signup_reducer);

  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleNextClick = () => {
    if (selectedButton) {
      dispatch({ type: "POSITION", payload: { selectedButton } });
      navigate("/test");
    }
  };

  return (
    <div className="background">
      <img
        className="userSelectLogo"
        src="https://s3.ap-northeast-2.amazonaws.com/ladder.v2/Ladder-logo.png"
      />
      <button
        className={`userSelectStudentButton ${
          selectedButton === 1
            ? "userSelectedStudentButton"
            : "userUnselectedStudentButton"
        }`}
        onClick={() => setSelectedButton(1)}
      >
        <div className="userSelectIcon">
          <FontAwesomeIcon
            icon={faChildren}
            size="4x"
            color={selectedButton === 1 ? "#FFFFFF" : "#394DB3"}
          />
        </div>
        학습이용자
      </button>
      <button
        className={`userSelectParentsButton ${
          selectedButton === 2
            ? "userSelectedParentsButton"
            : "userUnselectedParentsButton"
        }`}
        onClick={() => setSelectedButton(2)}
      >
        <div className="userSelectIcon">
          <FontAwesomeIcon
            icon={faHomeUser}
            size="4x"
            color={selectedButton === 2 ? "#FFFFFF" : "#394DB3"}
          />
        </div>
        학습보호자
      </button>
      <div className="bookStyle">
        <button className="userSelectNextButton" onClick={handleNextClick}>
          가입하기
        </button>
      </div>
    </div>
  );
}

export default UserSelect;
