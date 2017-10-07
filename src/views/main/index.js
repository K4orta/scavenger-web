import React, { Component } from 'react'
import styled from 'react-emotion'
import { inject, observer } from 'mobx-react'
import { post } from 'axios'
import { parse } from 'query-string'
import { withRouter } from 'react-router-dom'
import ItemList from '../../components/list'
import Map from '../../components/map'
import '../../App.css'


const UIContainer = styled('div')`
  & {
    position: absolute;
    z-index: 10;
    right: 1rem;
    bottom: 2rem;
  }
`

const Instructions = styled('div')`
  position: absolute;
  z-index: 20;
  right: 0;
  left: 0;
  background: white;
  bottom: 0;
  text-align: center;
  padding: .5rem 0;
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

class App extends Component {
  state = {
    menuOpen: false
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  componentDidMount() {
    const query = parse(this.props.location.search)
    if (query.from) {
      localStorage.setItem('phone', query.from)
      this.props.userStore.phone = query.from
    }
    this.props.itemStore.fetchTries(this.props.userStore.phone)
    this.timerId = setInterval(() => {
      this.props.itemStore.fetchTries(this.props.userStore.phone)
    }, 30000)
  }
  toggleMenu = (e) => {
    // navigator.geolocation.getCurrentPosition((s) => {
    //   console.log({
    //     lat: s.coords.latitude,
    //     lng: s.coords.longitude
    //   })
    //   this.setState({
    //     lat: s.coords.latitude,
    //     lng: s.coords.longitude
    //   })
    // }, null, {
    //   enableHighAccuracy: true
    // })
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
    if (!this.state.menuOpen) {
      this.props.itemStore.fetchTries(this.props.userStore.phone)
      
      this.props.history.replace({ search: '?menu-open' })
    } else {
      this.props.history.replace({ search: '' })
    }
  }
  updateGps = (e) => {
    navigator.geolocation.getCurrentPosition((s) => {
      this.props.userStore.updateLocation(s.coords.latitude, s.coords.longitude);
    }, null, {
      enableHighAccuracy: true
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
      post(`${process.env.REACT_APP_API_PATH}/upload`, data, config)
    }
    console.log(e.target.files)
  }
  render() {
    return (
      <div className="App">
        <Map
          itemTotals={this.props.itemStore.groupCounts()}
          found={this.props.itemStore.foundInGroup}>
          gps={this.props.userStore.location}
        </Map>
        <UIContainer>
          <Button onClick={this.updateGps}>
            <img src="/icons/gps.svg" alt=""/>
          </Button>
          <Button onClick={this.toggleMenu}>
            <img src="/icons/list.svg" alt=""/>
          </Button>
        </UIContainer>
        <ItemList open={this.state.menuOpen}/>
        <Instructions>Text pictures to <a href="sms:14153013770">415-301-3770</a></Instructions>
      </div>
    );
  }
}

export default inject('userStore', 'itemStore')(observer(withRouter(App)));
