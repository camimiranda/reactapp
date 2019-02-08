import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import HomeView from './views/HomeView';
import Login from './containers/Login/Login';
import CreateAccount from './components/CreateAccount/CreateAccount';
import ForgotPassword from './components/ForgotPassword';
import history from './services/History';
// import ProductGridList from './containers/ProductGridList';

const App =() => (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomeView}/>  
          <Route path="/login" component={Login}/>
          {/* <Route path="/products/men" component={ProductGridList}/>
          <Route path="/products/women" component={ProductGridList}/> */}
          <Route path="/create-account" component={CreateAccount}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
        </Switch>
        </Router>
    );
  
export default App;
