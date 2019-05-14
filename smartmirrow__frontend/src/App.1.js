// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// // import SpeechRecognition from './speachcom';
// import GoogleMapReact from 'google-map-react';
// import TrafficLayer from 'google-map-react';
// import Webcam from "react-webcam";
// // const {TrafficLayer} = require("react-google-maps");
// import SpeechRecognition from './speeach'

// class WebcamCapture extends React.Component {
//   setRef = webcam => {
//     this.webcam = webcam;
//   };
 
//   capture = () => {
//     const imageSrc = this.webcam.getScreenshot();
//     console.log(imageSrc);
//     fetch('http://127.0.0.1:8000/', {
//       method: 'POST',
//       headers: {
//          'Accept': 'application/json',
//          'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//          image: imageSrc
//       })
//       })
//   };
 
//   render() {
//     const videoConstraints = {
//       width: 1280,
//       height: 720,
//       facingMode: "user"
//     };
 
//     return (
//       <div>
//         <Webcam
//           audio={false}
//           height={350}
//           ref={this.setRef}
//           screenshotFormat="image/jpeg"
//           width={350}
//           videoConstraints={videoConstraints}
//         />
//         <button onClick={this.capture}>Capture photo</button>
//       </div>
//     );
//   }
// }

// class Map extends Component {
//    static defaultProps = {
//      center: { lat: 28.8386, lng: 78.7733 },
//      zoom: 13
//    }
   
//  render() {
//      return (
//        <div className='google-map'>
//          <GoogleMapReact
//            defaultCenter={ this.props.center }
//            defaultZoom={ this.props.zoom }
//            layerTypes={['TrafficLayer', 'TransitLayer']}
//            className='map-lodder'>
//            {/* <AnyReactComponent
//              lat={ 40.7473310 }
//              lng={ -73.8517440 }
//              text={ '' } */}
//              {/* <TrafficLayer 
//                defaultCenter={ this.props.center }
//                defaultZoom={ this.props.zoom } 
//                autoUpdate /> */}
//            {/* /> */}
//          </GoogleMapReact>
//        </div>
//      )
//    }
//  }


// class App extends Component {
//    constructor(props) {
//       super(props)
//       this.state = {}
//       this.getSpeech = this.getSpeech.bind(this);
//       this.ppppp = "p";
//       this.startListening = this.startListening.bind(this);
//    }
//    getSpeech(){
//       this.ppppp = ''
//    }

//    startListening(val){
//       console.log('qwertyui', val);
//    }

//    render() {
//       return (
//          <div className="container-fluid">
//             <div className='row'>
//                <div className="col-lg-6">
//                   <center>
//                      <DateDisplay />
//                      <Clock size={200} timeFormat="24hour" hourFormat="standard" />
//                   </center>
//                </div>
//                <div className='col-lg-6'>
//                   <center>
//                      <Temperature />
//                   </center>
//                </div>
//             </div>
//             <div className='row'>
//                <div className='col-lg-6'>
//                      <News />
//                </div>
//                <div className='col-lg-6'>
//                   <center>
//                      <Mails />
//                   </center>
//                </div>
//             </div>
//             <div className='row'>
//                <div className='col-lg-6'>
//                      <Map />
//                </div>
//                <div className='col-lg-6'>
//                   <center>
//                      {/* <SpeechRecognition transcript={this.ppppp} resetTranscript={this.getSpeech()}/> */}
//                      <WebcamCapture />
//                      <SpeechRecognition resetTranscript={this.getSpeech} listening={true} startListening={this.startListening} browserSupportsSpeechRecognition='true'/>
//                   </center>
//                </div>
//             <div>
//             </div>
//             </div>
//          </div>
//       );
//    }
// }

// class Mails extends React.Component {
//    constructor(props) {
//       super(props)
//       this.state = {
//          data: [],
//          mails: [],
//          token: "ya29.GlvMBjWJ-KhFeycocZc28K8AzI6MBRwC7TvlqRXsSB8XpcGTgEYsXnm32YhO2Re0Tb_kgpJSX2U2JCFKQT0WoMK_e7uvxGu90MbuurmzN1qVSeWlRGBywN5duvYe"
//       }
//       this.getmails = this.getmails.bind(this);
//       this.getMessages = this.getMessages.bind(this)
//    }

//    getMessages(id) {
//       // const { data } = this.state;
//       fetch('https://www.googleapis.com/gmail/v1/users/srashi791@gmail.com/messages/' + id + '/?access_token='+this.state.token).then(res => {
//                return res.json()
//             }).then(da => {
//                // console.log(da)
//                var messa = undefined
//                var subject = undefined
//                // console.log(da.snippet)
//                // if ('snippet' in da) {
//                subject = da.snippet
//                // }
//                // else {
//                //    subject = ''
//                // }
//                if (da.payload && 'parts' in da.payload) {
//                   messa = da.payload.parts[0].body.data
//                } else {
//                   messa = da.payload && da.payload.body.data
//                }
//                // if (!da.labelIds.indexOf('CHAT') > -1) {
//                   let d = this.state.data
//                   this.setState({data: [...d, { body: messa, subject: subject }]});
//                   return { body: messa, subject: subject };
//                // }
//                // if (da.labelIds)
//                // return {};
//             })
//             return {};
//    }

//    async getmails(params) {
// 	try{
//       fetch('https://www.googleapis.com/gmail/v1/users/srashi791@gmail.com/messages/?maxResults=5&access_token=' + this.state.token)
//          .then(res => {
//             return res.json();
//          }).then(da => {
//             da.messages.forEach((item) => {
//                this.getMessages(item.id);
//             })
//          })
// }catch(e){}
//          return
//    }

//    componentWillMount() {
//       this.getmails();
//    };

//    render() {
//       return (
//          <div>
//             {this.state.data.map((ne) => {
//                return(<div>
//                   {/* <b>Body : </b>{ne.body} <br /> */}
//                   <b>Subject : </b>{ne.subject} 
//                </div>);
//             })}
//          </div>
//       );
//    }
// }

// class News extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          articles: []
//       }
//    }

//    componentDidMount() {
//       var date = new Date();
//       var da = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
//       // 'https://newsapi.org/v2/everything?q=bitcoin&pageSize=10&country=india&from='+da+'&sortBy=publishedAt&apiKey=d5e11090c0c542019f98fdad95435c87'
//       fetch('https://newsapi.org/v2/top-headlines?country=in&pageSize=10&from='+da+'&apiKey=d5e11090c0c542019f98fdad95435c87').then(results => {
//          return results.json()
//       }).then(data => {
//          let news = data.articles.map((ne) => {
//             return (
//                <div>
//                   <b>Title : </b> {ne.title}<br />
//                   {/* <b>Author : </b>{ne.author}<br /> */}
//                   {/* <b>Description : </b>{ne.description}<br /> */}
//                   {/* <b>PublishedAt : </b>{ne.publishedAt}<br /> */}
//                   {/* <b>Content : </b>{ne.content}<br /> */}
//                   {/* {ne.url}<br/>
//                   {ne.urlToImage} */}
//                </div>
//             )
//          })
//          // console.log(data)
//          this.setState({ articles: news });
//       })
//    }

//    render() {
//       return (
//          <div>
//             {this.state.articles}
//          </div>
//       );
//    }
// }

// class Temperature extends React.Component {

//    constructor(props) {
//       super(props);
//       this.state = {
//          temp: undefined,
//          temp_max: undefined,
//          temp_min: undefined,
//          humid: undefined,
//          pressure: undefined,
//          visibility: undefined,
//          city: undefined,
//          country: undefined,
//          error: undefined
//       }
//    }

//    componentDidMount() {
//       fetch('http://api.openweathermap.org/data/2.5/weather?q=moradabad&appid=840e4a5c87ed74391a746aef08124776&units=metric').then(results => {
//          return results.json();
//       }).then(data => {
//          // console.log('Temperature ', data)
//          this.setState({
//             temp: data.main.temp,
//             temp_max: data.main.temp_max,
//             temp_min: data.main.temp_min,
//             city: data.name,
//             humid: data.main.humidity,
//             visibility: data.visibility,
//             error: ""
//          });
//       })
//    }
//    render() {
//       return (
//          <div>
//             <div>Temperature {this.state.temp} C</div>
//             <div>City {this.state.city}</div>
//             <div>Humidity {this.state.humid}</div>
//             <div>Max Temp {this.state.temp_max}</div>
//             <div>Min Temp {this.state.temp_min}</div>
//             <div>Visibility {this.state.visibility}</div>
//          </div>
//       );
//    }
// }

// class DateDisplay extends React.Component {
//    constructor(props) {
//       super(props);
//       var date = new Date();
//       const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//       this.state = { time: date.getDate() + '-' + monthNames[date.getMonth()] + '-' + date.getFullYear() };
//    }

//    render() {
//       return (
//          <div>
//             <center>{this.state.time}</center>
//          </div>
//       );
//    }
// }

// class Clock extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = { time: new Date() };
//       this.radius = this.props.size / 2;
//       this.drawingContext = null;
//       this.draw24hour = this.props.timeFormat.toLowerCase().trim() === "24hour";
//       this.drawRoman = !this.draw24hour && this.props.hourFormat.toLowerCase().trim() === "roman";
//    }

//    componentDidMount() {
//       this.getDrawingContext();
//       this.timerId = setInterval(() => this.tick(), 1000);
//    }

//    componentWillUnmount() {
//       clearInterval(this.timerId);
//    }

//    getDrawingContext() {
//       this.drawingContext = this.refs.clockCanvas.getContext('2d');
//       this.drawingContext.translate(this.radius, this.radius);
//       this.radius *= 0.9;
//    }

//    tick() {
//       this.setState({ time: new Date() });
//       const radius = this.radius;
//       let ctx = this.drawingContext;
//       this.drawFace(ctx, radius);
//       this.drawNumbers(ctx, radius);
//       this.drawTicks(ctx, radius);
//       this.drawTime(ctx, radius);
//    }

//    drawFace(ctx, radius) {
//       ctx.beginPath();
//       ctx.arc(0, 0, radius, 0, 2 * Math.PI);
//       ctx.fillStyle = "white";
//       ctx.fill();

//       const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
//       grad.addColorStop(0, "#333");
//       grad.addColorStop(0.5, "white");
//       grad.addColorStop(1, "#333");
//       ctx.strokeStyle = grad;
//       ctx.lineWidth = radius * 0.1;
//       ctx.stroke();

//       ctx.beginPath();
//       ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
//       ctx.fillStyle = "#333";
//       ctx.fill();
//    }

//    drawNumbers(ctx, radius) {
//       const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
//       const fontBig = radius * 0.15 + "px Arial";
//       const fontSmall = radius * 0.075 + "px Arial";
//       let ang, num;

//       ctx.textBaseline = "middle";
//       ctx.textAlign = "center";
//       for (num = 1; num < 13; num++) {
//          ang = num * Math.PI / 6;
//          ctx.rotate(ang);
//          ctx.translate(0, -radius * 0.78);
//          ctx.rotate(-ang);
//          ctx.font = fontBig;
//          ctx.fillStyle = "black";
//          ctx.fillText(this.drawRoman ? romans[num - 1] : num.toString(), 0, 0);
//          ctx.rotate(ang);
//          ctx.translate(0, radius * 0.78);
//          ctx.rotate(-ang);

//          // Draw inner numerals for 24 hour time format
//          if (this.draw24hour) {
//             ctx.rotate(ang);
//             ctx.translate(0, -radius * 0.60);
//             ctx.rotate(-ang);
//             ctx.font = fontSmall;
//             ctx.fillStyle = "red";
//             ctx.fillText((num + 12).toString(), 0, 0);
//             ctx.rotate(ang);
//             ctx.translate(0, radius * 0.60);
//             ctx.rotate(-ang);
//          }
//       }

//       ctx.font = fontSmall;
//       ctx.fillStyle = "#3D3B3D";
//       ctx.translate(0, radius * 0.30);
//       ctx.fillText("@TicatWolves", 0, 0);
//       ctx.translate(0, -radius * 0.30);
//    }

//    drawTicks(ctx, radius) {
//       let numTicks, tickAng, tickX, tickY;

//       for (numTicks = 0; numTicks < 60; numTicks++) {

//          tickAng = (numTicks * Math.PI / 30);
//          tickX = radius * Math.sin(tickAng);
//          tickY = -radius * Math.cos(tickAng);

//          ctx.beginPath();
//          ctx.lineWidth = radius * 0.010;
//          ctx.moveTo(tickX, tickY);
//          if (numTicks % 5 === 0) {
//             ctx.lineTo(tickX * 0.88, tickY * 0.88);
//          } else {
//             ctx.lineTo(tickX * 0.92, tickY * 0.92);
//          }
//          ctx.stroke();
//       }
//    }

//    drawTime(ctx, radius) {
//       const now = this.state.time;
//       let hour = now.getHours();
//       let minute = now.getMinutes();
//       let second = now.getSeconds();

//       // hour
//       hour %= 12;
//       hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
//       this.drawHand(ctx, hour, radius * 0.5, radius * 0.05);
//       // minute
//       minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
//       this.drawHand(ctx, minute, radius * 0.8, radius * 0.05);
//       // second
//       second = (second * Math.PI / 30);
//       this.drawHand(ctx, second, radius * 0.9, radius * 0.02, "red");
//    }

//    drawHand(ctx, position, length, width, color) {
//       color = color || "black";
//       ctx.beginPath();
//       ctx.lineWidth = width;
//       ctx.lineCap = "round";
//       ctx.fillStyle = color;
//       ctx.strokeStyle = color;
//       ctx.moveTo(0, 0);
//       ctx.rotate(position);
//       ctx.lineTo(0, -length);
//       ctx.stroke();
//       ctx.rotate(-position);
//    }

//    render() {
//       return (
//          <div className="Clock" style={{ width: String(this.props.size) + 'px' }}>
//             <canvas width={this.props.size} height={this.props.size} ref="clockCanvas" />
//          </div>
//       );
//    }
// }

// Clock.defaultProps = {
//    size: 400, // size in pixels => size is length & width
//    timeFormat: "24hour", // {standard | 24hour} => if '24hour', hourFormat must be 'standard'
//    hourFormat: "standard" // {standard | roman}
// };



// export default App;
// // Access_key_ID = AKIAI5535I5YQ5J3O6OQ
// // Secret_access_key = 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
