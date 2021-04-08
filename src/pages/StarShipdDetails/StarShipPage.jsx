import React from 'react'
import {Link} from 'react-router-dom'


class StarShipPage extends React.Component {

    render() { 
        const {state} = this.props.location
        return ( 
            <>
            <h1>name: {state.starship.name}</h1>
            <h2>Model: {state.starship.model}</h2>
            <Link to={'/starships'}>
                Return
            </Link>
            </>
         );
    }
}
 
export default StarShipPage;