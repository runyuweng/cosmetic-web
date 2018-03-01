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
  getType() {
    return io.get('/product/type').then(handleError);
  },
  getSort({ typeId }) {
    return io.get(`/product/sort/${typeId}`).then(handleError);
  },
  getProductList(data) {
    return io.post('/product/list', data).then(handleError);
  },
  getBrandList({ typeId }) {
    return io.get(`/product/brandlist/${typeId}`).then(handleError);
  },
  getProductDetail({ productId }) {
    return io.get(`/product/${productId}`).then(handleError);
  },

  getUserDetail({ userId }) {
    return io.get(`/user/${userId}`).then(handleError);
  },
  editUserDetail(data = {}) {
    return io.post('/user/', data).then(handleError);
  },

  getAddressList({ userId }) {
    return io.get(`/address/list/${userId}`).then(handleError);
  },
  getAddressItem({ addressId }) {
    return io.get(`/address/item/${addressId}`).then(handleError);
  },
}
