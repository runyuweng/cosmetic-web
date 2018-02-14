import axios from 'axios';

const io = axios.create({
  baseURL: '/',
  timeout: 10000,
  withCredentials: true,
  responseType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

function handleError(response) {
  return response;
}


export default {
  // user
  login(data = {}) {
    return io.post('/auth/login', data).then(handleError);
  },
  register(data = {}) {
    return io.post('/auth/register', data).then(handleError);
  },
}
