import React, {useState, useContext} from 'react'
import {Button,Input,Flex ,Box} from '@chakra-ui/react';
import { MovieContext } from './MovieContext';

export const AddMovies = () => {
    const [name, setName]= useState('');
    const [category, setCategory]= useState('');
    const [movies,setMovies] = useContext(MovieContext);

    const updateName= e =>{
        setName(e.target.value);
    }
    const updateCategory= e =>{
        setCategory(e.target.value);
    }
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(name,category);
        setMovies(prevMovies => [...prevMovies,{name:name, category:category}])

    }

    return (
        <div>
            <Flex mt={10}
            alignItems={'center'}
            justifyContent={'center'}
            > 
            <Box 
             
            as="div"
                w={{ base: 200, md: 300}}
            >
            <form onSubmit={handleSubmit}>
                <Input type="text" name="name" value={name} onChange={updateName} />
                <Input type="text" name="category"  value={category} onChange={updateCategory} />
                <Button type="submit">submit</Button>
            </form>
            </Box>
            </Flex>
            
        </div>
    )
}
