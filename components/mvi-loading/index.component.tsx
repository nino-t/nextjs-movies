import React from 'react';
import { Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';

const MviLoading: React.FC = () => {
  return (
    <Center h={150}>
      <Spinner name="line-scale" fadeIn="none" />
    </Center>
  );
}

export default MviLoading;