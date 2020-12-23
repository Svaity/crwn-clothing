import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignUpAndSignUp from "./pages/signin-up/signin-up.components"
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state={
      currentUser:"null"
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component = {ShopPage}/>
          <Route path="/signup" component={SignUpAndSignUp}/>
        </Switch>
      </div>
    );
  }
}



export default App;

