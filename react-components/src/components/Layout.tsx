import React from 'react'
import { Text,Flex,FlexProps,Box,Center} from '@chakra-ui/react'

import NavBar from "../components/NavBar";
import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    layerStyles: {
      base: {
        bg: "gray.50",
        border: "2px solid",
        borderColor: "gray.500",
      },
      selected: {
        bg: "teal.500",
        color: "teal.700",
        borderColor: "orange.500",
      },
    },
  })
interface Iprops extends FlexProps {

}
const Layout = ({children,height = "5px",...props}) => {
 
    return (


        <div>
            <Center>
            <Box  layerStyle="selected">This is a box</Box>
            <Flex as="div" height="100vh" {...props}
            >
            <Text h={height}>me </Text>
            <NavBar />
            {children}
            </Flex>
            </Center>
        </div>
    )
}

export default Layout
