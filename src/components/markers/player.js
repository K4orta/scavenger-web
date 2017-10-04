import React from 'react'
import { Marker } from 'react-map-gl'
import styled from 'emotion/react'

const PlayerStyle = styled('div')`
  width: 10px;
  height: 10px;
  background: blue;
  border-radius: 50%;
`

export default (props) => (
  <Marker {...props}>
    <PlayerStyle />
  </Marker>
)