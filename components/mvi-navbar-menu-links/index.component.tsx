import React from 'react';
import { Box, Stack } from '@chakra-ui/layout';

const MviNavbarMenuLinks: React.FC<{ isOpen: boolean }> = ({ isOpen, children }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {children}
      </Stack>
    </Box>
  );
}

export default MviNavbarMenuLinks;