import React from 'react'
import {  Flex,Box,Text, TextProps} from '@chakra-ui/react';

const Movie = ({name,color,...props}) => {
    return (
        <div>
          <Flex as='div'
                pt={10}
                marginTop={10}
                justifyContent={'center'}
                alignItems={'center'}
          >
              <Box> 

                  <Text color={color}
                        fontSize={'xl'}
                        {...props}
                  >
                      {name}

                  </Text>



              </Box>
          </Flex>
            
        </div>
    )
}

export default Movie
