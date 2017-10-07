import React from 'react'
import { Marker } from 'react-map-gl'
import styled from 'react-emotion'

const PlayerStyle = styled('div')`
  width: 10px;
  height: 10px;
  background: #4286f4;
  border-radius: 50%;
`

export default (props) => (
  <Marker {...props} offsetLeft={-5} offsetTop={-5}>
    <PlayerStyle />
  </Marker>
)