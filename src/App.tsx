import React, {useState, useEffect} from 'react';
import {Navbar} from "./components/Navbar";
import {TodosPages} from "./pages/TodosPages";
import  { BrowserRouter, Switch, Route } from 'react-router-dom'
import {ABoutPage} from "./pages/AboutPage";


const  App: React.FC =() => {



  return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
            <Switch>
                <Route component={TodosPages} path="/" exact />
                <Route component={ABoutPage} path="/about"/>
            </Switch>
        </div>
      </BrowserRouter>
  )
}

export default App;
