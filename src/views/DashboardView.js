import React from 'react'
import { Hero } from 'reactbulma'
import RouteObject from '../components/RouteObject'
import RouteInfoView from './RouteInfoView'

const routes = [
  {title: "ASRU 4920", description: "Descripción", points: ["zona 7, bosques de san nicolas", "zona 9 miraflores", "oaklanda zona 10", "carretera al atlántico"]},
  {title: "ASRU 4919", description: "Descripción", points: ["zona 8", "zona 11"]},
  {title: "ASRU 4918", description: "Descripción", points: ["zona 11", "zona 1", "zona 4"]},
]

class DashboardView extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      moreinfo: -1
    }
  }

  render(){
    return(
      <div>
        { 
          this.state.moreinfo == -1 ? 
          (routes.map( (e, i) => <RouteObject route={ e } key={ i } viewThis={ () => this.setState({ moreinfo: i}) }/>))
          : <RouteInfoView route={ routes[this.state.moreinfo] } goBack={ () => this.setState({ moreinfo: -1 }) }/>
        }
      </div>
    )
  }
}

export default DashboardView