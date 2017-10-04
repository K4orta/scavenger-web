import React, { Component } from 'react'
import styled from 'emotion/react'
import { post } from 'axios'
import ItemList from './components/list'
import Map from './components/map'
import './App.css'

const UIContainer = styled('div')`
  & {
    position: absolute;
    z-index: 10;
    right: 1rem;
    bottom: 1rem;
  }
`

const Button = styled('button')`
  & {
    border: 0;
    background: #FF00FF;
    display: block;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 1rem;
    margin: .5rem;
    position: relative;
  }

  &:active {
    outline: none;
  }

  & img {
    display: block;
    width: 28px;
    height: 28px;
  }
`

const FileButton = styled('label')`
  & {
    border: 0;
    background: #FF00FF;
    display: block;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 1rem;
    margin: .5rem;
    position: relative;
  }

  & input {
    position: absolute;
    width: 0.5px;
    height: 0.5px;
    overflow: hidden;
    left: 0;
    top: 0;
  }

  & img {
    display: block;
    width: 28px;
    height: 28px;
  }
`

class App extends Component {
  state = {
    menuOpen: false
  }
  toggleMenu = (e) => {
    navigator.geolocation.getCurrentPosition((s) => {
      console.log({
        lat: s.coords.latitude,
        lng: s.coords.longitude
      })
      this.setState({
        lat: s.coords.latitude,
        lng: s.coords.longitude
      })
    }, null, {
      enableHighAccuracy: true
    })
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }
  photoUpload(e) {
    e.preventDefault();
    if (e.target.files.length > 0) {
      const data = new FormData()
      data.append('file', e.target.files[0])
      const config = {
        onUploadProgress: function(e) {
          const percentCompleted = Math.round( (e.loaded * 100) / e.total );
          console.log(percentCompleted)
        }
      };
      post('/api/upload', data, config)
    }
    console.log(e.target.files)
  }
  render() {
    return (
      <div className="App">
        <Map></Map>
        <UIContainer>
          <Button onClick={this.toggleMenu}>
            <img src="/icons/list.svg" alt=""/>
          </Button>
          <FileButton for="file">
            <img src="/icons/photo_camera.svg" alt=""/>
            <input id="file" type="file" accept="image/*;capture=camera" onChange={this.photoUpload} />
          </FileButton>
          
        </UIContainer>
        <ItemList open={this.state.menuOpen}/>
      </div>
    );
  }
}

export default App;
