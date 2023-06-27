import { Button, HStack,Text } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={"4"} shadow={"dark-lg"} bgColor={"blueviolet"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to='/'>Home</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <Link to='/exchanges'>Exchanges</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <Link to='/coins'>Coins</Link>
      </Button>
      {/* <Text color={"white"} fontWeight={"bold"} position={"absolute"} left={"800px"}>CryptoDSCe</Text> */}
    </HStack>
  );
}

export default Header