import React from 'react'
import ReactDOM from 'react-dom'
import LoginView from './views/LoginView'
import { Section } from 'reactbulma'

class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      isLoggedIn: false
    }
  }

  render(){
    return (
      <Section>
      {
        this.state.isLoggedIn ?
        <div> Hello World </div>
        : 
        <LoginView verifyLogin={ (user, pin) => this.setState({ isLoggedIn: user === 'admin' && pin === 'admin' }) }/>
      }
      </Section>
    )
  }
} 


ReactDOM.render(
  <App />,
  document.getElementById('main')
)
