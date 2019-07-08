import axios from 'axios';

const KEY = 'AIzaSyDOLFHgilmIENKqppCkd-YJNiIIdm6MOd4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    part: 'snippet',
    key: KEY,
  },
});
