import React, { Component, Fragment } from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';

class HomeView extends Component {
  render(){
      return (
          <Fragment>
            <Layout/>
            <Home />
        </Fragment>
      );
    }
}

export default HomeView;