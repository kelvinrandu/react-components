import React from 'react';
import {  VStack   } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import PropTypes from 'prop-types';
import Login from '../components/Login'
import Register from '../components/Register'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showRegister: false
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showLogin: !state.showLogin,
      showRegister: !state.showRegister
    }));
  }

  render() {
    return (
      <VStack>  

        <Button
         onClick={this.handleToggleClick}
         variantColor="teal" 
         variant="outline" 
         width="half" mt={4}>
         {this.state.showLogin ? 'Register' : 'Login'}
        </Button>
        <Login show={this.state.showLogin} />
        <Register show={this.state.showRegister} />

        </VStack>
    );
  }
}

export default Home;
  