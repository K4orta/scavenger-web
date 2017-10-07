import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Provider } from 'mobx-react'
import Home from './views/main'
import Admin from './views/admin'
import stores from './stores'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Provider {...stores} >
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/admin" exact component={Admin} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
