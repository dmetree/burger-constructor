import React, { Component } from 'react';
import gs from './App.module.css';
import Layout from './components/Layout/Layout'; 
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  
  render() {

    return (
      <div className={gs.App}>
        <Layout />
        <BurgerBuilder/>
        
      </div>
    );
  }
}

export default App;
