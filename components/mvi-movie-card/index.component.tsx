import React from 'react';
import Link from 'next/link';
import * as i from './index.interface';
import { Image } from '@chakra-ui/image';
import { Box, Heading, Text, VStack } from '@chakra-ui/layout';

const MviMovieCard: React.FC<i.MovieCard> = ({ id, poster, title, year, watchUrl, handlePosterClicked }) => {
  return (
    <Box>
      <Image
        src={poster}
        alt={title}
        w="full"
        cursor="pointer"
        onError={(e: any)=> {e.target.onerror = null; e.target.src = '/images/null-image.png' }}
        onClick={handlePosterClicked}
      />
      
      <Box pt="2.5">
        <Text fontSize="small" fontWeight="bold" color="#9CA3AF">{year}</Text>
        <Link href={watchUrl}>
          <a>
            <Heading fontSize="large" color="#111827">{title}</Heading>
          </a>
        </Link>
      </Box>
    </Box>
  );
}

export default MviMovieCard;