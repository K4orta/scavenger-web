import React from 'react'
import styled from 'react-emotion'
import { post } from 'axios'

const SignupForm = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

class Signup extends React.Component {
  state = {
    phone: "",
    deviceId: ""
  }
  changeName = (e) => {
    this.setState({ name : e.target.value })
  }
  submitUser = (e) => {
    post(`${process.env.REACT_APP_API_PATH}/user`, {
      phone: this.state.name,
      deviceId: 'ABC'
    }).then(resp => console.log(resp.data))
  }
  render() {
    return (
      <SignupForm>
        <div className="Signup__content">
          <input id="name_input" type="text" value={this.state.name} onChange={this.changeName} />
          <button onClick={this.submitUser} disabled={this.state.value}>Submit</button>
        </div>
      </SignupForm>
    )
  }
}

export default Signup