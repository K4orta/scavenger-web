import React from 'react'
import { Marker } from 'react-map-gl'
import styled from 'react-emotion'

const Counter = styled('div')`
  background: white;
  padding: .5rem;
  white-space: nowrap;
`

export default ({lat, lng, count, max}) => (
  <Marker latitude={lat} longitude={lng} offsetLeft={-70} offsetTop={-30}>
    <Counter>
      {count} of {max} items found
    </Counter>
  </Marker>
)