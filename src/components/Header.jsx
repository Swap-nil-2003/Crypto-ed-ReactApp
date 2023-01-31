import { HStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
  <HStack p={"4"} shadow={"base"} bgColor={'blackAlpha.700'}>
    <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
        <Link to="/trending">Trending</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
        <Link to="/featured">Featured</Link>
    </Button>
  </HStack>
  )
} 

export default Header;
