import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component = {ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;

