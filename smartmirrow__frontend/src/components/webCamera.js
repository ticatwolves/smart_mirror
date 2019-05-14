import React from 'react';
import Webcam from "react-webcam";


class WebcamCapture extends React.Component {
     constructor(props) {
      super(props)
      // this.state = {}
   }
    setRef = webcam => {
      this.webcam = webcam;
    };
   
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc);
      fetch('http://127.0.0.1:8000/face-login/', {
        method: 'POST',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           image: imageSrc
        })
        }).then(
        function(res){
          return res.json();
        }).then(
        function(data){
          const f = JSON.parse(data);
          console.log(f)
          console.log(f.name)
          if (f.name){
            alert(f.name)
            console.log('pass')
            // this.setState({name:f.name})
          }else{
            alert('Invalid Face')
            console.log('failed')
          }
        })
    };
   
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
   
      return (
        <div>
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
          <button onClick={this.capture}>Capture photo</button>
        </div>
      );
    }
}
  
export default WebcamCapture;
