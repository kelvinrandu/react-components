import React from 'react';
import { Avatar, Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';

class ComponentC extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }

export default ComponentC;
  