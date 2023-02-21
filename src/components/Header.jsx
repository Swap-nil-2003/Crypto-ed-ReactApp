import { HStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
  <HStack p={"4"} shadow={"base"} bgColor={'blackAlpha.700'}>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler" type="button" style={{ marginRight: 10 }} data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <p class="navbar-brand">Crypto'ed</p>
        
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/">Home</Link>
            </Button>
            </li>
            <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }} >
                <Link to="/exchanges">Exchanges</Link>
            </Button>
            </li>
            <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/coins">Coins</Link>
            </Button>
            </li>
            <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/trending">Trending</Link>
            </Button>
            </li>
            <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/featured">Featured</Link>
            </Button>
            </li>
          </ul>
        </div>
      </nav>
  </HStack>
  )
} 

export default Header;
