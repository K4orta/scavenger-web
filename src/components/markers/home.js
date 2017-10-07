import React from 'react'
import { Marker } from 'react-map-gl'
import styled from 'emotion-react'

const HomeStyle = styled('div')`
  background: url('/icons/home.svg');
  width: 28px;
  height: 28px;
`

export default () => (
  <Marker offsetLeft={-14} offsetTop={-14}>
    <HomeStyle />
  </Marker>
)
