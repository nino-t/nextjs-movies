import React from 'react';
import * as i from './index.interface';
import { Box } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { IconButton } from '@chakra-ui/button';
import { SearchIcon } from '@chakra-ui/icons';

const MviNavbarSearch: React.FC<i.NavbarSearch> = ({ isOpen, keyword, placeholder, action }) => {
  const [inputValue, setInputValue] = React.useState<string>(keyword);
  
  React.useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

  return (
    <Box
      as="form"
      method="GET"
      action={action}
      display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
      flexBasis={{ base: '100%', md: 'auto' }}
      width="calc(100% / 3)"
      px="1"
      borderRadius="md"
      border="2px solid #D1D5DB"
    >
      <Input
        name="q"
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        py="6"
        color="white"
        _placeholder={{
          color: 'white'
        }}
        width="calc(100% - 30px)"
        border="none"
        _focus={{
          boxShadow: 'none'
        }}
      />
      <IconButton
        aria-label={placeholder}
        icon={<SearchIcon />}
        width="30"
        py="6"
        bg="transparent"
        outline="none"
        border="none"
        _hover={{
          bg: 'transparent',
          boxShadow: 'none'
        }}
        _active={{
          bg: 'transparent',
          boxShadow: 'none'
        }}
        _visited={{
          bg: 'transparent',
          boxShadow: 'none'
        }}
      />
    </Box>
  );
}

export default MviNavbarSearch;