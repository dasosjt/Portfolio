import React from 'react'
import { Hero, Container, Title, SubTitle, Input, Content, Control, Button } from 'reactbulma'

export default class LoginView extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      user: "admin",
      pin: ""
    }
  }

  render(){
    return (
      <Hero medium primary bold>
        <Hero.Body>
          <Container>
            <Content>
              <Title>
                Multiquímica
              </Title>
              <SubTitle>
                Iniciar Sesión
              </SubTitle>
            </Content>
          </Container>
          <Container>
            <form 
              onSubmit={ (e) => {
                e.preventDefault() 
                this.props.verifyLogin(this.state.user, this.state.pin) }}>
              <div className="field">
                <label className="label">Usuario</label>
                <div className="select">
                  <select 
                    value={ this.state.user }
                    onChange={ (e) => this.setState({ user: e.target.value}) }>
                    <option value={ "admin" }>admin</option>
                    <option value={ "admin1" }>admin1</option>
                    <option value={ "admin2" }>admin2</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">PIN</label>
                <Input 
                  type="password" 
                  value={ this.state.pin } 
                  onChange={ (e) => this.setState({ pin: e.target.value }) }/>
              </div>
            <Button 
              primary
              onClick={ (e) => {
                e.preventDefault() 
                this.props.verifyLogin(this.state.user, this.state.pin) }} 
              className="is-pulled-right"> Enviar </Button>
            </form>
          </Container>
        </Hero.Body>
      </Hero>
    )
  }
}