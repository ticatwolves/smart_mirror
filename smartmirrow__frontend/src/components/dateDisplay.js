import React from 'react';

class DateDisplay extends React.Component {
    constructor(props) {
       super(props);
       var date = new Date();
       const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       this.state = { time: date.getDate() + '-' + monthNames[date.getMonth()] + '-' + date.getFullYear() };
    }
 
    render() {
       return (
          <div>
             <center>{this.state.time}</center>
          </div>
       );
    }
 }

 export default DateDisplay;