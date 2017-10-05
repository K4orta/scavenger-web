import { fromJS } from 'immutable'
import MAP_STYLE from '../data/streets-v9.json'
import areaData from '../data/area'

export const dataLayer = fromJS({
  id: 'data',
  source: 'booga',
  type: 'fill',
  interactive: true,
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        [0, '#3288bd'],
        [1, '#66c2a5'],
        [2, '#abdda4'],
        [3, '#d53e4f'],
        [4, '#ffffbf'],
        [5, '#fee08b'],
        [6, '#fdae61'],
        [7, '#f46d43'],
        [8, '#d53e4f']
      ]
    },
    'fill-opacity': 0.5
  }
});

export const data = areaData

export const defaultMapStyle = fromJS(MAP_STYLE)
  // .setIn(['sources', 'areaGroups'], fromJS({type: 'geojson', areaData}))
  // Add point layer to map
// export const loadedMapStyle = defaultMapStyle.set('layers', defaultMapStyle.get('layers').push(areaLayer));