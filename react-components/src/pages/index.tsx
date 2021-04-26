import { Stack, HStack, VStack } from "@chakra-ui/react"
import ComponentF from '../components/ComponentF'
import ComponentC from '../components/ComponentC'
import ComponentP from '../components/ComponentP'

export default function Home() {
 
  return (
    <Stack>
       <ComponentC name="class component"/>  
      <ComponentF name="functional component"/>   
      <ComponentP name="pure component"/>    
    </Stack>
    
  )
}
