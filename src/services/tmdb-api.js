import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODA1Yjg5OThlNjkwYzQyYWE1Yzg1NDhlN2ZiNzI2NSIsIm5iZiI6MTczNjE2NDM0My42MDcsInN1YiI6IjY3N2JjM2Y3MjVlMGU5MWM1Nzc1MGExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iGjuSk_ErNFkKYj1N12cmv7Gr0188g35PwS-j3kFDIA';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching movie details:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axiosInstance.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error(
      'Error fetching trending movies:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const response = await axiosInstance.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error(
      'Error searching movies:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
