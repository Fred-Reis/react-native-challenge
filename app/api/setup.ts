import axios from 'axios';

import {API_TOKEN} from 'react-native-dotenv';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export default instance;
