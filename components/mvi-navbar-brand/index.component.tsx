import React from 'react';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const MviNavbarBrand: React.FC<{ title: string, logo: string, to: string }> = ({ title, logo, to }) => {
  return (
    <Box as={Link} href={to}>
      <a>
        <Box flexDirection="column">
          <Image
            src={logo}
            alt={title}
            boxSize="50px"
            borderRadius="full"
            display="inline"
            mr="2"
          />
          <Text fontSize="xl" fontWeight="black" display="inline-block" position="relative" top="1">
            {title}
          </Text>
        </Box>
      </a>
    </Box>
  );
}

export default MviNavbarBrand;