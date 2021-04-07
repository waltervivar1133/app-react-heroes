import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { PrivateRoute } from "./PrivateRoute";  

import { LoginScreen } from "../components/Login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { PublicteRoute } from "./PublicRoute";


export const AppRouter = () => {


  const { user } = useContext(AuthContext)



  return (
    <Router>
      <div>
        <Switch>
          <PublicteRoute 
            isAuthenticated = { user.logged }
            exact
            component= { LoginScreen }
            path= '/login'
          
          />
          <PrivateRoute 
          isAuthenticated = { user.logged}
          component={ DashboardRouter }
          path='/'  
          />
        </Switch>
      </div>
    </Router>
  )
}
