import React, { useState, useCallback, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import aiTalk from "./AITalk.json";
import "../../assets/icon/FontAwesome";
import Bottom from "../../components/Bottom";
import { useReactMediaRecorder } from "react-media-recorder";
import { useDispatch, useSelector } from "react-redux";
import { sound_function } from "../../redux/middleware";

function Home() {
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.login_reducer);

  const navigate = useNavigate();

  const aitext = aiTalk.aitext;
  const usertext = aiTalk.usertext;

  const maxLen = Math.max(aitext.length, usertext.length);

  const RenderBlocks = () => {
    const isLoading = useSelector((state) => state.record_reducer.loading);
  
    const aitext = aiTalk.aitext;
    const usertext = aiTalk.usertext;
    const maxLen = Math.max(aitext.length, usertext.length);
  
    const blocks = [];
  
    for (let i = 0; i < maxLen; i++) {
      if (i < aitext.length) {
        blocks.push(
          <div key={`BlockA${i}`} className="BlockA">
            <div className="blockText">{aitext[i].voicetext}</div>
          </div>
        );
      }
      if (i < usertext.length) {
        blocks.push(
          <div key={`BlockB${i}`} className="BlockB">
            <div className="blockText">{usertext[i].voicetext}</div>
          </div>
        );
      }
    }
  
    if (isLoading) {
      blocks.push(
        <div key="loadingBlock" className="loadingBlock">
          <div className="blockText">Loading...</div>
        </div>
      );
    }
  
    return <>{blocks}</>;
  };
  

  const speechContainerRef = useRef(null);

  // useEffect(() => {
  //   // 스크롤을 맨 아래로 이동시키는 함수
  //   const scrollToBottom = () => {
  //     if (speechContainerRef.current) {
  //       speechContainerRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "end",
  //       });
  //     }
  //   };

  //   scrollToBottom();
  //   dispatch(sound_function.sound_count_check(user_data.user_id));
  // }, [aitext, usertext]);

  // const { status, startRecording, stopRecording, mediaBlobUrl } =
  //   useReactMediaRecorder({ video: true });

  // const [stream, setStream] = useState();
  // const [media, setMedia] = useState();
  // const [onRec, setOnRec] = useState(true);
  // const [source, setSource] = useState();
  // const [analyser, setAnalyser] = useState();
  // const [audioUrl, setAudioUrl] = useState();

  // const onRecAudio = () => {
  //   // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
  //   const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  //   // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
  //   const analyser = audioCtx.createScriptProcessor(0, 1, 1);
  //   setAnalyser(analyser);

  //   function makeSound(stream) {
  //     // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
  //     const source = audioCtx.createMediaStreamSource(stream);
  //     setSource(source);

  //     // AudioBufferSourceNode 연결
  //     source.connect(analyser);
  //     analyser.connect(audioCtx.destination);
  //   }

  //   // 마이크 사용 권한 획득 후 녹음 시작
  //   navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  //     const mediaRecorder = new MediaRecorder(stream);
  //     mediaRecorder.start();
  //     setStream(stream);
  //     setMedia(mediaRecorder);
  //     makeSound(stream);

  //     // 음성 녹음이 시작됐을 때 onRec state값을 false로 변경
  //     analyser.onaudioprocess = function (e) {
  //       setOnRec(false);
  //     };
  //   });
  // };

  // const record_count_value = useSelector(
  //   (state) => state.record_reducer.current_value
  // );
  // const onSubmitAudioFile = useCallback(() => {
  //   if (audioUrl) {
  //     // 파일 전송을 위한 form data 생성
  //     const formData = new FormData();
  //     const makeFile = new Promise((res, rej) => {
  //       const file = new File(
  //         [audioUrl],
  //         `${user_data.user_id}_${record_count_value}.mp3`,
  //         {
  //           type: "audio",
  //         }
  //       );
  //       if (file) res(file);
  //     });
  //     makeFile
  //       .then((file) => {
  //         formData.append("file", file);
  //         formData.append("user_id", user_data.user_id);
  //       })
  //       .then(() => {
  //         dispatch(sound_function.sound_transfer(formData));
  //       });
  //   }
  // }, [audioUrl, dispatch, user_data.user_id]);

  // const offRecAudio = () => {
  //   // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
  //   media.ondataavailable = function (e) {
  //     setAudioUrl(e.data);
  //     setOnRec(true);
  //     onSubmitAudioFile();
  //   };

  //   // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
  //   stream.getAudioTracks().forEach(function (track) {
  //     track.stop();
  //   });

  //   // 미디어 캡처 중지
  //   media.stop();

  //   // 메서드가 호출 된 노드 연결 해제
  //   analyser.disconnect();
  //   source.disconnect();
  // };

  return (
    <div className="background">
      <div className="blockContainer">
        <div className="blockContainer">
          <div className="speechContainer">
          <RenderBlocks />  
          </div>
        </div>
      </div>
      <img className="Ladder" src="https://s3.ap-northeast-2.amazonaws.com/ladder.v2/Ladder-logo.png" />
      <div className="homeMicConatiner">
        <div className="homeWithAI">추억을</div>
        <div>
          <button
            className="homeMic"
            // onClick={onRec ? onRecAudio : offRecAudio}
          >
            {/* {onRec ? (
              <FontAwesomeIcon icon="microphone" size="3x" />
            ) : ( */}
              <img src="https://s3.ap-northeast-2.amazonaws.com/ladder.v2/spinner.gif" alt="loading" className="spinner" />
            {/* )} */}
          </button>
        </div>
        <div className="homeTalk">녹음해요!</div>
      </div>
      <Bottom />
    </div>
  );
}
export default Home;
