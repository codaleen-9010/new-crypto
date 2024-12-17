import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome, FaExchangeAlt, FaCoins } from 'react-icons/fa';

const Header = () => {
  return (
    <HStack
      p={'4'}
      shadow={'base'}
      bgGradient="linear(to-r, blue.800, purple.700)"
      spacing={'8'}
      justifyContent={'center'}
    >
      <Button
        variant={'unstyled'}
        color={'white'}
        _hover={{ color: 'teal.400' }}
        fontSize={'lg'}
        fontWeight={'bold'}
        leftIcon={<FaHome />}
      >
        <Link to="/">Home</Link>
      </Button>

      <Button
        variant={'unstyled'}
        color={'white'}
        _hover={{ color: 'teal.400' }}
        fontSize={'lg'}
        fontWeight={'bold'}
        leftIcon={<FaExchangeAlt />}
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>

      <Button
        variant={'unstyled'}
        color={'white'}
        _hover={{ color: 'teal.400' }}
        fontSize={'lg'}
        fontWeight={'bold'}
        leftIcon={<FaCoins />}
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
