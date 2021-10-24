import React from 'react';
import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/layout';
import * as i from './index.interface';
import { Button } from '@chakra-ui/button';

const MviHeroLanding: React.FC<i.HeroLanding> = (props) => {
  return (
    <Box
      w="full"
      height="calc(100vh - 300px)"
      zIndex="-1"
      backgroundImage={`linear-gradient(rgba(155, 89, 182, .55), rgba(155, 89, 182, .55)), url("${props.image}")`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
    >
      <Box
        px={8}
        h="full"
        display="flex"
        alignItems="center"
        zIndex="1"
      >
        <Box w="50%">
          <Heading color="white">
            {props.title}
          </Heading>
          <Text display="block" color="white" mt="4" mb="2">{props.description}</Text>
          <Link href={props.button.href}>
            <Button as="a" bg="red.500" color="white" fontWeight="bold" p={6}>
              {props.button.label}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default MviHeroLanding;