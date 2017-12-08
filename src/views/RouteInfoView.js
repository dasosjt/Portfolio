import React from 'react'
import { Hero, Container, Title, SubTitle, Table, Button, Input, Icon } from 'reactbulma'

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
              route.points.map( (e, i) => 
                <Table.Tr key={ i }>
                  <Table.Th > { e } </Table.Th>
                  <Table.Td >
                    <Input 
                      value={ '-' } 
                      onChange={ (e) => console.log(e.target.value) }/>
                  </Table.Td>
                  <Table.Td >
                    <Button 
                      primary
                      onClick={ (e) => console.log("change") }> 
                      <Icon className="fa fa-floppy-o"/> 
                    </Button>
                  </Table.Td>
                </Table.Tr>
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