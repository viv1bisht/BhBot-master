import React, { useState, useEffect } from "react";
import { copyToClipboard } from "../utility/common_function/helperFunction";
import { postRequestQuery } from "../services/aws/awsApi";
import useUserContext from "../state_management/ContextAPI/UserContext";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

  export const BhotContainer = () => {
    const { isLoggedIn } = useUserContext();
    const [responseText, setResponseText] = useState("");
    const [requestText, setRequestText] = useState("");
    const { speak } = useSpeechSynthesis();
    const {transcript} = useSpeechRecognition();
  
  
    const handlePostRequest = async () => {
      if (!isLoggedIn) {
        alert("Please login to use this feature!");
        return;
      }
      if (requestText.length === 0) {
        alert("Please Ask Any Question!");
        return;
      }
      const response = await postRequestQuery(requestText);
      setResponseText(response);
      setRequestText("");
    };
  
    const handleCopyToClipboard = () => {
      copyToClipboard(responseText);
    };

    const startListening = () => {
      if (!isLoggedIn) {
        alert("Please login to use this feature!");
        return;
      }
      SpeechRecognition.startListening();
    };
  
  
    useEffect(() => {
      if (!isLoggedIn) {
        setResponseText("");
        setRequestText("");
      }
      if(transcript!==""){
        setRequestText(transcript);
        console.log('Transcript:', transcript);
        // transcript when we speak to mic they convert voice into text
      }
    }, [isLoggedIn,transcript]);
  
    return (
      <>
        <div className="response-container">
          <textarea
            placeholder="Response..."
            value={responseText}
            onChange={(e) => {
              setResponseText(e.target.value);
            }}
            readOnly
          ></textarea>
          <button className="copy-button" onClick={handleCopyToClipboard}>Copy</button>
          <button className="submit-button" onClick={handlePostRequest}>Submit</button>
          <button className="record" onClick={startListening}>Start</button>
          <button className="speech"onClick={() => speak({ text: responseText })}>speech</button>
        </div>
        <textarea
          placeholder="Ask Any question..."
          value={requestText}
          onChange={(e) => setRequestText(e.target.value)}
        ></textarea>
      </>
    );
  };
  
  export default BhotContainer;