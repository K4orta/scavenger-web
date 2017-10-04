import React from 'react'
import MapGL from 'react-map-gl'
import Marker from './markers/home'

const token = process.env.REACT_APP_MAPBOX_KEY

class Map extends React.Component {
  state = {
    viewport: {
      latitude: 37.7537077,
      longitude: -122.4873976,
      zoom: 18,
      bearing: -3,
      pitch: 50,
      width: 500,
      height: 500
    },
    settings: {
      dragPan: true,
      dragRotate: true,
      scrollZoom: true,
      touchZoomRotate: true,
      doubleClickZoom: true,
      minZoom: 14,
      maxZoom: 20,
      minPitch: 0,
      maxPitch: 85
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _onViewportChange = viewport => this.setState({viewport});

  _onSettingChange = (name, value) => this.setState({
    settings: {...this.state.settings, [name]: value}
  });

  render() {

    const {viewport, settings} = this.state;

    return (
      <MapGL
        {...viewport}
        {...settings}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={token} >
        <Marker></Marker>
      </MapGL>
    );
  }
}

export default Map