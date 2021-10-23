import { Flex } from '@chakra-ui/layout';
import React from 'react';

const MviNavbarContainer: React.FC = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={4}
      px={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      {props.children}
    </Flex>
  );
}

export default MviNavbarContainer;