import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./Terms.css";

function Terms() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
  }

  const termsNextClick = () => {
    if (isChecked) {
        navigate('/signup');
    }
}

  return(
    <div className="background">
      <img 
        className="Logo"
        src="https://s3.ap-northeast-2.amazonaws.com/ladder.v2/Ladder-logo.png" 
      />
      <div className="title">
        약관에 동의해주세요
      </div>
      <div className="termsBox">
        <h3>앱 이용약관과 개인정보취급방침</h3>
        튜터 앱의 개인정보취급방침에는 일반적으로 다음과 같은 내용이 포함될 수 있습니다: <br/><br/>
        - 개인정보의 수집 및 이용 목적 <br/>
        - 수집하는 개인정보의 항목 <br/>
        - 개인정보의 보유 및 이용 기간 <br/>
        - 개인정보의 제3자 제공 및 위탁 <br/>
        - 정보주체의 권리와 그 행사 방법 <br/>
        - 개인정보의 파기 절차 및 방법 <br/>
        - 개인정보 보호책임자 및 담당자의 연락처 <br/>
        - 회원가입 정보: 이름, 이메일 주소, 비밀번호, 전화번호 등 <br/>
        - 결제 정보: 신용카드 정보, 은행 계좌 정보 등 <br/>
        - 서비스 이용 정보: 검색 기록, 이용 기록, 클릭 기록 등 <br/>
      </div>
      <div className="check">
        <input 
          type="radio" 
          name="agree"
          checked={isChecked}
          onChange={handleCheckChange}
        />
        <label 
          htmlFor="agree"
          className="checkMessage"
        >
          위 약관에 동의합니다.
        </label>
      </div>
      <div className="termsStyle">
        <Link to="/"> 
          <button className="termsBackButton"> 뒤로가기 </button>
        </Link>
          <button className="termsNextButton" onClick={termsNextClick}> 
            다음 
          </button> 
      </div>
    </div>
  );
}

export default Terms;