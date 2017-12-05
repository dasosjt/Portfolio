import React from 'react'
import { Hero, Container, Title, SubTitle, Input, Content, Control, Button } from 'reactbulma'

export default class LoginView extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      user: "",
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
              
              <label htmlFor="normal">Usuario</label>
              <Input 
                id="normal" 
                value={ this.state.user } 
                onChange={ (e) => this.setState({ user: e.target.value }) }/>

              <label htmlFor="normal">PIN</label>
              <Input 
                id="normal" 
                type="password" 
                value={ this.state.pin } 
                onChange={ (e) => this.setState({ pin: e.target.value }) }/>
              <Button 
                primary 
                className="is-pulled-right"> Enviar </Button>
            </form>
          </Container>
        </Hero.Body>
      </Hero>
    )
  }
}