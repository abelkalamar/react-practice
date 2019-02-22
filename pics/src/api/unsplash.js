import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com' ,
  headers: {
    Authorization: 'Client-ID fd4954856f6786444782d9a0e661083f4f06abc10d5d59eca58615bcd89c3f27'
  }
});
