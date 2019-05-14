import React from "react";
import SpeechRecognition from 'react-speech-recognition'
import PropTypes from "prop-types";


const propTypes = {
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
  };
  
  const Dictaphone = ({
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  }) => {
    if (!browserSupportsSpeechRecognition) {
        console.log('browserSupportsSpeechRecognition', browserSupportsSpeechRecognition)
      return null;
    }
    // console.log('HEY ------- ', transcript)
    resetTranscript(transcript)
    return (
      <div>
        {/* <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span> */}
      </div>
    );
  };
  
  Dictaphone.propTypes = propTypes;
  
  export default SpeechRecognition(Dictaphone);
 