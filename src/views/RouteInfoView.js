import React from 'react'
import { Hero, Container, Title, SubTitle, Table, Button, Input, Icon } from 'reactbulma'
import RouteInfoRow from '../components/RouteInfoRow'

const RouteInfoView = ({ route, goBack }) => (
  <Hero medium primary bold>
    <Hero.Body>
      <Container>
        <Title>
          { route.title }
        </Title>
        <SubTitle>
          { route.description }
        </SubTitle>
      </Container>
      <br/>
      <Container>
        <Table bordered>
          <Table.Head>
            <Table.Tr>
              <Table.Th>Lugar</Table.Th>
              <Table.Th>Kilometraje</Table.Th>
              <Table.Th>Estado</Table.Th>
            </Table.Tr>
          </Table.Head>
          <Table.Body>
            {
              route.points.map( (element, index) => 
                <RouteInfoRow element={ element } key={ index }/>
              ) 
            }
          </Table.Body>
        </Table>
      </Container>
      <Button danger 
        className="pull-right"
        onClick={ () => goBack() }> 
        <Icon className="fa fa-arrow-left" />
          <span>Regresar</span> 
        </Button>
    </Hero.Body>
  </Hero>
)

export default RouteInfoView