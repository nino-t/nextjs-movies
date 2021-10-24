import axios from 'axios';

const request = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  params: {
    apikey: `${process.env.NEXT_PUBLIC_API_KEY}`
  }
});

export default request;