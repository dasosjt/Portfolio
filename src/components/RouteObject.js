import React from 'react'
import { Card, Content, Container, Button, Icon } from 'reactbulma'

const RouteObject = ({ route, viewThis }) => (
  <Container>
    <Card>
      <Card.Header>
        <Card.Header.Title centered>
          { route.title }
        </Card.Header.Title>
        <Card.Header.Icon>
          <Icon className="fa fa-plus"
            onClick={ () => viewThis() }/>
        </Card.Header.Icon>
      </Card.Header>
    </Card>
    <br/>
  </Container>
)

export default RouteObject