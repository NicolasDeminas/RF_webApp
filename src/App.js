import React from 'react';
import BarraMenu from './menuInicio';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShowHorarios from './showHorarios'
import Login from './login'


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <BarraMenu />
      <Switch>
          <Route path="/horarios">
            <ShowHorarios />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
      </Switch>
    </div>
    </BrowserRouter>
  )}
export default App;
