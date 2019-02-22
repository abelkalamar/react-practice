import axios from 'axios';

const KEY = 'AIzaSyAUuqJS-GTTWFHzn0lmcygvGglc43_DK1U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
