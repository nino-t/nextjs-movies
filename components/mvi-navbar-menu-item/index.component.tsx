import React from 'react';
import Link from 'next/link';
import { Text } from '@chakra-ui/layout';

const MviNavbarMenuItem: React.FC<{ to: string }> = ({ to, children }) => {
  return (
    <Link href={to}>
      <a>
        <Text display="block" fontWeight="medium">
          {children}
        </Text>
      </a>
    </Link>
  );
}

export default MviNavbarMenuItem;