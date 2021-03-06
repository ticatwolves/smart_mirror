import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'

class Dictaphone extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
      </div>
    )
  }
}

// const propTypes = {
//     // Props injected by SpeechRecognition
//     transcript: PropTypes.string,
//     resetTranscript: PropTypes.func,
//     browserSupportsSpeechRecognition: PropTypes.bool
//   }

// Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone)