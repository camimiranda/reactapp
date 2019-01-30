import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';
import HomeView from './views/HomeView';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import ForgotPassword from './components/ForgotPassword';
import history from './services/History';

const App =() => (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomeView}/>  
          <Route path="/login" component={Login}/>
          <Route path="/products/men" component={ProductGridList}/>
          <Route path="/products/women" component={ProductGridList}/>
          <Route path="/create-account" component={CreateAccount}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/todo" component={Todo}/>
        </Switch>
        </BrowserRouter>
    );
  
export default App;
