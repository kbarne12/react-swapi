import React, { Component } from 'react'
import { getAllStarships} from '../../services/sw-api'
import { Link } from 'react-router-dom'

class StarShips extends Component {
    state = { 
        results: []

     }
     async componentDidMount() {
        
        const starShipList = await getAllStarships()
        console.log(starShipList, 'starShipList')
        this.setState({ results: starShipList.results })
        console.log(this.state)
      }


    render() { 
        
        return ( 
            <> 
            { this.state.results.length ?
            <>
           <h1>Starship List</h1>
           <div className="d-flex flex-wrap"> {this.state.results.map((starship) => 
            <div className="card" key={ starship.index}>
                <Link
                to={{
                  pathname: `/starship`,
                  
                  state: { starship },
                }}
              >
                 {starship.name} 
              </Link>
            </div>
           )}</div>
           </>
           :'Loading...'
            }
          </>
        );
    }
}


 
export default StarShips