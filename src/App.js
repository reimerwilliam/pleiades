import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route 
} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Login from './Login'
import * as Routes from './routes'
import './App.css'

class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Navigation />
        
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.LOGIN} component={Login} />
       </div>
     </Router> 
    )
  }
}

export default App
