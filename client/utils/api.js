import axios from 'axios';
import Cookies from 'js-cookie'
import { message } from 'antd'
const io = axios.create({
  baseURL: '/',
  timeout: 10000,
  withCredentials: true,
  responseType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

io.defaults.headers.common.authorization = Cookies.get('authorization');

function handleVerify(res) {
  const { authorization = null } = res.headers
  if (authorization) {
    Cookies.set('authorization', authorization, { expires: 7 })
    io.defaults.headers.common.authorization = Cookies.get('authorization');
  }
  if (res.data.code === 2) {
    message.info('请登录后再试')
  }
  return res
}

export default {
  // user
  login(data = {}) {
    return io.post('/auth/login', data).then(handleVerify);
  },
  register(data = {}) {
    return io.post('/auth/register', data).then(handleVerify);
  },
  getType() {
    return io.get('/product/type').then(handleVerify);
  },
  getSort({ typeId }) {
    return io.get(`/product/sort/${typeId}`).then(handleVerify);
  },
  getProductList(data) {
    return io.post('/product/list', data).then(handleVerify);
  },
  getBrandList({ typeId }) {
    return io.get(`/product/brandlist/${typeId}`).then(handleVerify);
  },
  getProductDetail({ productId }) {
    return io.get(`/product/${productId}`).then(handleVerify);
  },
  // 获取首页商品
  getIndexProduct({ typeId }) {
    return io.get(`/product/section/${typeId}`).then(handleVerify);
  },

  getUserDetail({ userId }) {
    return io.get(`/user/${userId}`).then(handleVerify);
  },
  editUserDetail(data = {}) {
    return io.post('/user/', data).then(handleVerify);
  },

  getAddressList({ userId }) {
    return io.get(`/address/list/${userId}`).then(handleVerify);
  },
  getAddressItem({ addressId }) {
    return io.get(`/address/item/${addressId}`).then(handleVerify);
  },
  editAddress(data = {}) {
    return io.post('/address/edit/', data).then(handleVerify);
  },
  addAddress(data = {}) {
    return io.post('/address/add/', data).then(handleVerify);
  },

  generateOrder(data = {}) {
    return io.post('/order/create', data).then(handleVerify);    
  },
  getOrderList({ userId }) {
    return io.get(`/order/list/${userId}`).then(handleVerify);
  },
  getOrderDetail({ orderId }) {
    return io.get(`/order/detail/${orderId}`).then(handleVerify);
  },
}
