import React from 'react';

class Temperature extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
          temp: undefined,
          temp_max: undefined,
          temp_min: undefined,
          humid: undefined,
          pressure: undefined,
          visibility: undefined,
          city: undefined,
          country: undefined,
          error: undefined
       }
    }
 
    componentDidMount() {
       fetch('http://api.openweathermap.org/data/2.5/weather?q=moradabad&appid=840e4a5c87ed74391a746aef08124776&units=metric').then(results => {
          return results.json();
       }).then(data => {
          // console.log('Temperature ', data)
          this.setState({
             temp: data.main.temp,
             temp_max: data.main.temp_max,
             temp_min: data.main.temp_min,
             city: data.name,
             humid: data.main.humidity,
             visibility: data.visibility,
             error: ""
          });
       })
    }
    render() {
       return (
          <div>
             <div>Temperature {this.state.temp} C</div>
             <div>City {this.state.city}</div>
             <div>Humidity {this.state.humid}</div>
             <div>Max Temp {this.state.temp_max}</div>
             <div>Min Temp {this.state.temp_min}</div>
             <div>Visibility {this.state.visibility}</div>
          </div>
       );
    }
 }
 

 export default Temperature;
