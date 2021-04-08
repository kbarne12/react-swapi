import './App.css';
import React from 'react';
import Header from '../../components/Header/Header';
import StarShips from '../../pages/StarShips/StarShips'
import { Route } from 'react-router-dom'
import StarShipPage from '../../pages/StarShipdDetails/StarShipPage'
class App extends React.Component {
	render() { 
		return(
      <>
      <Route exact path="/starships" render={() => ( 
        <>
      <Header />
      <StarShips />
      </>
      )} />
      <Route exact path="/starship" render={({location}) => ( 
        <>
      <Header />
      <StarShipPage location={location} />
      </>
      )} />
      </>
    )
	}
}

export default App;
