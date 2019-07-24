import React from 'react';
import './include/bootstrap';
import './App.css';
import { FirstComponent } from './components/my-first-component';
import SecondComponent from './components/my-second-component';
import NavComponent from './components/nav-component';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { ClickerComponent } from './components/clicker-component';

import { DecrementComponent } from './components/Decrement';



import BallComponent from './components/ball-component';

import { SpinnerComponent } from './components/spinner-component';
import {SpinningAtom} from './components/spinning-atom';
import BallComponent from './components/ball-component';
import { dieRollerComponent } from './components/dice-roller-component';
import JessicaComponent from './components/jessicas-component';
import FunComponent from './components/fun-page-component';
import { MiguelComponent } from './components/miguel-component';


/*
  Components
  Components makeup the abstract structure from which an application can be built.
  Components are intended to be reusable, flexible sections of a website, that
  maintain their own state and behavior.

  There are primarily two ways to define a component.  The first, is by extending
  the React.Component class. The second is a "Function Component" which is used
  for simpler components that don't need any additional behavior.

  All components require method: render

  The render method returns an HTML-like syntax that is used to then
  render the component by React. Function components are essentially components
  that only have a render method.
*/
const App: React.FC = () => {
  return (
    // render URL as /#/route-name
    // <BrowserRouter> is the other primary router available
    // <Switch> - Is a list of Routes that can be rendered
    // based on the URL context of the router
    // localhost:3000/#/first then render FirstComponent in the switch
    <HashRouter>
      <div>
        <NavComponent />
        <Switch>
          <Route path="/first" component={FirstComponent} />
          <Route path="/second" component={SecondComponent} />
          <Route path="/clicker" component={ClickerComponent} />
          <Route path="/reducer" component={DecrementComponent} />

          <Route path="/ball" component={BallComponent} />

          <Route path="/dieRoller" component={dieRollerComponent} />
          <Route path="/Jessica" component={JessicaComponent} />
          <Route path="/fungame" component={FunComponent} />

          <Route path="/spinner" component={SpinnerComponent} />
          <Route path="/spinning-atom" component={SpinningAtom}/>
          <Route path="/ball" component={BallComponent} />
          <Route path="/dieRoller" component={dieRollerComponent} />
          <Route path="/Jessica" component={JessicaComponent} />
          <Route path="/fungame" component={FunComponent} />
          <Route path="/miguel" component={MiguelComponent} />
          <Route component={FirstComponent} />
        </Switch>
      </div >
    </HashRouter >

  );
}

export default App;
