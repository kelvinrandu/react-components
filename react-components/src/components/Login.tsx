import React from 'react';
import { Box, Center, Heading} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel} from "@chakra-ui/form-control";
import {Input } from "@chakra-ui/input"; 



class Login extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
 
    };
  
  }
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <Center height="100vh">  
      <Box 
        p={8} 
        my={"15"}  
        maxWidth="500px" 
        borderWidth={1} 
        borderRadius={8} 
        boxShadow="lg">
            <Box textAlign="center">
                  <Heading>Login</Heading>
            </Box>
          <Box my={4} textAlign="left">
              <form>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" placeholder="test@test.com" />
                    </FormControl> 
                    <FormControl isRequired mt={6}>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" placeholder="*******" />
                    </FormControl>        
                    <Button
                      type="submit" 
                      variantColor="teal" 
                      variant="outline" 
                      width="full" mt={4}>
                        Register
                    </Button>

            
              </form>
                </Box>
                    <Box textAlign="center">
                        <div className="bg-gray-100">
                            <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6" >
                                      
                                        © codesmithsAfrica. All rights reserved
                            </div>
                        </div>
                    </Box>
            </Box>
    </Center>
    );
  }



}

export default Login;
