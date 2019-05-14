import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Map extends Component {
    static defaultProps = {
      center: { lat: 28.8386, lng: 78.7733 },
      zoom: 18
    }
    
  render() {
      return (
        <div className="row">
          <div className='google-map'>
            <GoogleMapReact
              defaultCenter={ this.props.center }
              defaultZoom={ this.props.zoom }
              layerTypes={['TrafficLayer', 'TransitLayer']}
              className='map-lodder'>
            </GoogleMapReact>
          </div>
        </div>
      )
    }
}

export default Map;