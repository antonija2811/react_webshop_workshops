import React from 'react';
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Layout from "./components/Layout/Layout";
import {WorkshopConsumer} from './context';

function App() {
  return (
    <WorkshopConsumer>
      {value => {
        const {getAllData} = value;
        console.log("app");
        return(
        <div className="App">
          <Layout>
            <Switch>
              <Route 
                exact path="/"  
                render={()=> {
                  if(value.workshops.length === 0)
                  {
                    console.log("home get all data");
                    getAllData();
                  }
                  return <Home/>
                }}
              >
              </Route>
              <Route path="/details"
                render={()=> {
                  if(value.users.length === 0)
                  {
                    console.log("details get all data");
                    getAllData();
                  }
                  return <Details/>
                }}
              >
              </Route>
            </Switch>
          </Layout>
        </div>
        );
      }}
    </WorkshopConsumer>

  );
}

export default App;
