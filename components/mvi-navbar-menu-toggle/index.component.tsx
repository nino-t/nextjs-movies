import React from 'react';
import { Box } from '@chakra-ui/layout';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const MviNavbarMenuToggle: React.FC<{ isOpen: boolean, toggle: () => void }> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
}

export default MviNavbarMenuToggle;