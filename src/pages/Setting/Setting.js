import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login_func } from '../../redux/middleware/login_action';
import "./Setting.css";
import "../../assets/icon/FontAwesome";
import Bottom from "../../components/Bottom";

function Setting() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [level, setLevel] = useState(5);
    const [gauge, setGauge] = useState(70);
    const [userAge, setUserAge] = useState("--");
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
    }

    const backButton = () => {
        navigate(-1); // 바로 이전 페이지로 이동
    };

    return(
        <div className="studentBackground">
            <div className="profile">
              회원정보 수정
            </div>
            <img 
                className="fixProfile"
                src="https://s3.ap-northeast-2.amazonaws.com/ladder.v2/Ladder-logo.png"
            />
            <div className="settingInfo">
                <div className="infoItem">
                    <div className="infoValue">이름</div>
                    <input className="infoTitle" placeholder={`${userNickname}`}/>
                </div>
                <div className="infoItem">
                    <div className="infoValue">나이</div>
                    <input className="infoTitle" placeholder={`${userAge}`}/>
                </div>
                <div className="infoDateItem">
                    <div className="infoValue">허밍과 함께한 지</div>
                    <div className="infoDateTitle"> {membershipDuration} </div>
                    <div className="infoValue">일 째</div>
                </div>
            </div>
            <div className="settingButtonStyle">
                <button className="settingLogoutButton" onClick={handleLogout}> 로그아웃 </button>
                <button className="loginButton" onClick={backButton}> 저장하기 </button>
            </div>
            <Bottom/>
        </div>
    );
}

export default Setting;