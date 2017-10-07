import React from 'react'
import MapGL from 'react-map-gl'
import { fromJS } from 'immutable'
import { defaultMapStyle, data, dataLayer } from './map-style'
import Count from './markers/count'
import Player from './markers/count'

const token = process.env.REACT_APP_MAPBOX_KEY

class Map extends React.Component {
  state = {
    mapStyle: defaultMapStyle,
    viewport: {
      latitude: 37.7537077,
      longitude: -122.4873976,
      zoom: 15,
      bearing: -3,
      width: 500,
      height: 500
    },
    settings: {
      dragPan: true,
      dragRotate: true,
      scrollZoom: true,
      doubleClickZoom: true,
      minZoom: 14,
      maxZoom: 20
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();

    const mapStyle = defaultMapStyle
    // Add geojson source to map
    .setIn(['sources', 'booga'], fromJS({type: 'geojson', data}))
    // Add point layer to map
    .set('layers', defaultMapStyle.get('layers').push(dataLayer))
    setTimeout(() => this.setState({data, mapStyle}), 2000)
    
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
    const { itemTotals, found } = this.props
    const {viewport, settings, mapStyle} = this.state;
    const zones = [
      {
        lat: 37.75419228778779,
        lng: -122.48929738998413,
        id: 1
      },
      {
        lat: 37.754370424235226,
        lng: -122.48445868492126,
        id: 2
      },
      {
        lat: 37.75452311227736,
        lng: -122.48071432113647,
        id: 3
      }
    ]
    const renderedZones = zones.map(z =>
      <Count key={z.id} lat={z.lat} lng={z.lng} count={found[z.id]} max={itemTotals[z.id]} />
    )
    const player = this.props.gps ? <Player latitude={this.props.gps.lat} longitude={this.props.gps.lng} /> : null
    return (
      <MapGL
        {...viewport}
        {...settings}
        mapStyle={mapStyle}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={token} >,
        
        {renderedZones}
      </MapGL>
    );
  }
}

export default Map