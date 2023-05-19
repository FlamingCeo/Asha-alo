import React, {useState} from "react"
import { Route, Switch } from "react-router-dom"
import App from './App';
import LandingPage from './LandingPage';



const Routes = () => {



  return (

    <div>

      <Switch>
       <Route path="/chatbot/:id"  component={App}/>
        <Route path="/"  component={LandingPage}/>
      </Switch>


    </div>
  )
}

// export default {AuthenticationRoutes, GameRoutes}
export default Routes
