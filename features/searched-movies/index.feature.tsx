import React from 'react';
import { useRouter } from 'next/router';
import { Box, Heading, Grid } from '@chakra-ui/layout';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchSearchMoviesAction } from '../../app/search/index.action';
import { selectAllSearchMovies, selectAllSearchMoviesPage, selectAllSearchMoviesStatus, selectTotalSearchMovies, selectTotalSearchMoviesInData } from '../../app/search/index.selector';
import MviMovieCard from '../../components/mvi-movie-card/index.component';
import MviPreviewImage, { ImagePreview } from '../../components/mvi-preview-image/index.component';
import MviLoading from '../../components/mvi-loading/index.component';

const SearchedMovies: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const keyword: string = String(router.query?.q || '');
  const pageSearch = useAppSelector(selectAllSearchMoviesPage);
  const [page, setPage] = React.useState<number>(pageSearch);
  const [openPreview, setOpenPreview] = React.useState<boolean>(false);
  const [previewObj, setPreviewObj] = React.useState<ImagePreview | null>(null);

  const movies = useAppSelector(selectAllSearchMovies);
  const status = useAppSelector(selectAllSearchMoviesStatus);
  const totalMovies = useAppSelector(selectTotalSearchMovies);
  const totalMoviesInResponse = useAppSelector(selectTotalSearchMoviesInData);

  React.useEffect(() => {
    dispatch(fetchSearchMoviesAction({ q: keyword, page: page }));
  }, [dispatch, page, keyword]);

  React.useEffect(() => {
    if (status !== 'loading') {
      const isScrolling = (): void => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if ((scrollTop + clientHeight >= scrollHeight) && totalMovies < totalMoviesInResponse) {
          setPage(page + 1);
        }
      }

      window.addEventListener('scroll', isScrolling);
      return () => window.removeEventListener('scroll', isScrolling);
    }
  }, [page, totalMovies, totalMoviesInResponse, status]);

  const openImagePreview = (objImage: ImagePreview) => {
    setPreviewObj(objImage);
    setOpenPreview(true);
  }

  const closeImagePreview = () => {
    setOpenPreview(false);
  }

  return (
    <React.Fragment>
      {
        openPreview &&
        <MviPreviewImage
          image={previewObj?.image ?? ''}
          alt={previewObj?.alt ?? ''}
          handleClose={closeImagePreview}
        />
      }

      <Box>
        <Heading fontSize="3xl" mb={6}>Search results for: {keyword}</Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={12}>
          {
            movies.map((movie, index) => (
              <MviMovieCard
                key={index}
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                watchUrl={`/watch?v=${movie.imdbID}`}
                handlePosterClicked={() => openImagePreview({ image: movie.Poster, alt: movie.Title })}
              />
            ))
          }
        </Grid>

        {
          status === 'loading' && <MviLoading />
        }
      </Box>
    </React.Fragment>
  );
}

export default SearchedMovies;