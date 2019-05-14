import React from 'react';
// import WebcamCapture from './webCamera';
import Webcam from "react-webcam";

class Registration extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
        fname: undefined,
       }
       this.updateInputValue = this.updateInputValue.bind(this)
    }

    updateInputValue = function(evt){
        this.setState({fname:evt.target.value})
        console.log(this.state)
    }
 
    componentDidMount() {
    }
    render() {
       return (
          <div>
              <input className='form-control' type='text' placeholder='Enter name' name='fname' onChange={this.updateInputValue}></input>
              <div className="container-fluid"><WebcamCapture fname={this.state.fname}/></div>
          </div>
       );
    }
 }
 
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
    //  console.log(imageSrc);
    console.log(this.props.fname)
     fetch('http://127.0.0.1:8000/face-add/', {
       method: 'POST',
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       },
       body: JSON.stringify({
          image: imageSrc,
          first_name: this.props.fname
       })
       }).then(
       function(res){
         return res.json();
       }).then(
       function(data){
         const f = JSON.parse(data);
         if (f.success){
           alert('Succefully added')
           console.log('pass')
           // this.setState({name:f.name})
         }else{
           alert('Cant try later')
           console.log('failed')
         }
       })
   };
  
   render() {
       console.log(this.props)
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


 export default Registration;
