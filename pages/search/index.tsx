import Head from 'next/head';
import { Box } from '@chakra-ui/layout';
import AppLayout from '../../features/app-layout/index.feature';
import SearchedMovies from '../../features/searched-movies/index.feature';

export default function Search() {
  return (
    <div>
      <Head>
        <title>Search for | MovieStock</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppLayout initHeaderIsTransparent={false} enabledChangeNavbarBgScroll={false}>
        <Box px={8} pt={110}>
          <SearchedMovies />
        </Box>        
      </AppLayout>
    </div>
  );
}
