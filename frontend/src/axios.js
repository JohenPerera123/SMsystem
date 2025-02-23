import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/' })// THE API (cloud function) URL 

export default instance;