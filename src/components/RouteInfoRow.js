import React from 'react'
import { Table, Button, Input, Icon } from 'reactbulma'


export default class RouteInfoRow extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      buttonInput: true,
      input: "-"
    }
  }

  render(){
    return(
      <Table.Tr>
        <Table.Th > { this.props.element } </Table.Th>
        <Table.Td >
          <Input 
            value={ this.state.input }
            type={ "numeric" }
            disabled={ !this.state.buttonInput ? "disabled" : "" } 
            onChange={ (e) => this.setState({ "input" : e.target.value}) }/>
        </Table.Td>
        <Table.Td >
          <Button 
            primary={ this.state.buttonInput }
            warning={ !this.state.buttonInput }
            onClick={ (e) => this.setState({ "buttonInput" : !this.state.buttonInput }) }> 
            <Icon className={ this.state.buttonInput ? "fa fa-floppy-o" : "fa fa-pencil" }/> 
          </Button>
        </Table.Td>
      </Table.Tr>
    )
  }  
}