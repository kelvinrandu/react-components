import React from 'react';
import { Avatar, Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';

class ComponentC extends React.Component {
    render() {
      return (
        <div>
           {this.props.name ?  'yes':
           'no'}
        </div>
      );
    }
  }

export default ComponentC;
  