import React, { Component } from 'react';
import routes from './routes';
import registerRoute from './registerRoute';
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin, userLogout } from './redux/reducers/user_reducers';
import Nav from './components/subComponents/Nav';
// import Register from './components/userSubpages/Register';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);    
  }

  componentDidMount() {
    // const { account } = this.props.user;
    const { userLogin } = this.props;   
    axios.get('/api/user-data').then(res => {
      if(res.data.user) {
        userLogin(res.data.user);
        this.login();
      }
      }).catch(err => console.log("Get User Data Error-------------", err));
  }
  login(e=null) {
    if(e) e.preventDefault();
  }
  logout(e=null) {
    if(e) e.preventDefault();
  }
  render() {
    const { account } = this.props.user;
    return ( 
      <div className="app">
        <Nav loginProp={this.login} logoutProp={this.logout}/>
        {account && account.username ? routes : null}
        {registerRoute}
        <br />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return state;
}
const mapDispatchToProps = {
  userLogin,
  userLogout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
