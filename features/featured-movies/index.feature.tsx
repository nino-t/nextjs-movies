import { Box, Heading } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMoviesAction } from '../../app/movies/index.action';
import { selectAllMovies, selectAllMoviesPage, selectAllMoviesStatus, selectTotalMovies, selectTotalMoviesInData } from '../../app/movies/index.selector';
import MviLoading from '../../components/mvi-loading/index.component';
import MviMovieCard from '../../components/mvi-movie-card/index.component';
import MviPreviewImage, { ImagePreview } from '../../components/mvi-preview-image/index.component';

const FeaturedMovies: React.FC = () => {
  const dispatch = useAppDispatch();
  const pageMovies = useAppSelector(selectAllMoviesPage);
  const [page, setPage] = React.useState<number>(pageMovies);
  const [openPreview, setOpenPreview] = React.useState<boolean>(false);
  const [previewObj, setPreviewObj] = React.useState<ImagePreview | null>(null);

  const movies = useAppSelector(selectAllMovies);
  const status = useAppSelector(selectAllMoviesStatus);
  const totalMovies = useAppSelector(selectTotalMovies);
  const totalMoviesInResponse = useAppSelector(selectTotalMoviesInData);

  React.useEffect(() => {
    dispatch(fetchMoviesAction({ page: page, q: 'Batman' }));
  }, [dispatch, page]);

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
        <Heading fontSize="3xl" mb={6}>Batman Movies</Heading>
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

export default FeaturedMovies;