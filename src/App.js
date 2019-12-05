import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser} from  "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import MainContainer from "./components/MainContainer.js"

class App extends React.Component{

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
      // Add as Navbar
      <div className="App">
        <NavBar/>
        <MainContainer/>
      </div>

      // <Footer/>
    );
  }
}



export default connect(null, {getCurrentUser})(App);
