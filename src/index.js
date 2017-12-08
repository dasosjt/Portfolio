import React from 'react'
import ReactDOM from 'react-dom'
import LoginView from './views/LoginView'
import DashboardView from './views/DashboardView'
import { Section } from 'reactbulma'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      isLoggedIn: false,
      user: "admin",
    }
  }

  render(){
    return (
      <Section>
      {
        this.state.isLoggedIn ?
        <DashboardView user={ this.state.user }/> 
        : 
        <LoginView 
          verifyLogin={ (user, pin) => { 
            this.setState({ isLoggedIn: user === 'admin' && pin === 'admin' })
            this.setState({ user}) }} />
      }
      </Section>
    )
  }
} 


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('main')
)
