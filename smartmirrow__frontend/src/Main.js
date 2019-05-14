import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import SpeechRecognition from './speeach'
import News from './components/news';
import Clock from './components/clock';
import WebcamCapture from './components/webCamera';
import Map from './components/maps';
import DateDisplay from './components/dateDisplay';
import Mails from './components/mails';
import Temperature from './components/temp';

class Main extends Component {
   constructor(props) {
      super(props)
      this.state = {temp:null, cam:null, news:null, mail:null, time:null, map:null, data:null}
      this.resetSpeech = this.resetSpeech.bind(this);
      this.startListening = this.startListening.bind(this);
      this.ppp = null
   }
   resetSpeech(val){
      var pk = val.split(" ");
      console.log(pk[pk.length-1])
      if (pk[pk.length-1] === 'time' && !this.state.time){
         this.setState({time:true, temp:null, cam:null, news:null, mail:null, map:null})
      }
      if (pk[pk.length-1] === 'camera' && !this.state.cam){
         this.setState({cam:true, temp:null, news:null, mail:null, time:null, map:null})
      }
      if (pk[pk.length-1] === 'temperature' && !this.state.temp){
         this.setState({temp:true, cam:null, news:null, mail:null, time:null, map:null})
      }
      if ((pk[pk.length-1] === 'mails' || pk[pk.length-1] === 'mail' || pk[pk.length-1] === 'call') && !this.state.mail){
         this.setState({mail:true, temp:null, cam:null, news:null, time:null, map:null})
      }
      if ((pk[pk.length-1] === 'maps' || pk[pk.length-1] === 'map' || pk[pk.length-1] === 'zero') && !this.state.map){
         this.setState({map:true, temp:null, cam:null, news:null, mail:null, time:null})
      }
      if (pk[pk.length-1] === 'news' && !this.state.news){
         this.setState({news:true, temp:null, cam:null, mail:null, time:null, map:null})
      }
   }

   startListening(val){
      console.log('gbfffvdssdsd', val);
   }

   // render() {
   //    return(
   //    <div className="container-fluid"><SpeechRecognition resetTranscript={this.resetSpeech} listening={true} startListening={this.startListening} browserSupportsSpeechRecognition={true}/><WebcamCapture /></div>)
   // }

   render() {
         if (this.state.news) return (<div className="container-fluid"><SpeechRecognition resetTranscript={this.resetSpeech} listening={true} startListening={this.startListening} browserSupportsSpeechRecognition={true}/><News /></div>)
         if (this.state.cam) return (<div className="container-fluid"><SpeechRecognition resetTranscript={this.resetSpeech} listening={true} startListening={this.startListening} browserSupportsSpeechRecognition={true}/><WebcamCapture /></div>)
         if (this.state.map) return (<div className="container-fluid"><SpeechRecognition resetTranscript={this.resetSpeech} listening={true} startListening={this.startListening} browserSupportsSpeechRecognition={true}/><Map /></div>)
         if (this.state.mail) return (<div className="container-fluid"><SpeechRecognition resetTranscript={this.resetSpeech} listening={true} startListening={this.startListening} browserSupportsSpeechRecognition={true}/><Mails /></div>)
         if (this.state.temp) return (<div className="container-fluid"><SpeechRecognition resetTranscript={this.resetSpeech} listening={true} startListening={this.startListening} browserSupportsSpeechRecognition={true}/><Temperature /></div>)
          return (<div className="container-fluid"><SpeechRecognition resetTranscript={this.resetSpeech} listening={true} startListening={this.startListening} browserSupportsSpeechRecognition={true}/><Clock /><DateDisplay/></div>)
   }
}

// class Re extends React.Component {
//    constructor(props){
//       super(props)
//       this.state = {temp:null, cam:null, news:null, mail:null, time:null, map:null}
//    }

//    render() 
// }

export default Main;
// Access_key_ID = AKIAI5535I5YQ5J3O6OQ
// Secret_access_key = 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
