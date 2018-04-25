import axios from 'axios';
import Cookies from 'js-cookie'
import { message } from 'antd'

// 配置请求默认参数
const io = axios.create({
  baseURL: '/',
  timeout: 10000,
  withCredentials: true,
  responseType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

// 请求默认携带cookie中的authorization
io.defaults.headers.common.authorization = Cookies.get('authorization');

// 验证用户是否登陆
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

// 接口集合
export default {
  // 登录
  login(data = {}) {
    return io.post('/auth/login', data).then(handleVerify);
  },
  // 注册
  register(data = {}) {
    return io.post('/auth/register', data).then(handleVerify);
  },
  // 获取类型
  getType() {
    return io.get('/product/type').then(handleVerify);
  },
  // 获取详细类型
  getSort({ typeId }) {
    return io.get(`/product/sort/${typeId}`).then(handleVerify);
  },
  // 获取商品列表
  getProductList(data) {
    return io.post('/product/list', data).then(handleVerify);
  },
  // 获取品牌列表
  getBrandList({ typeId }) {
    return io.get(`/product/brandlist/${typeId}`).then(handleVerify);
  },
  // 获取商品详情
  getProductDetail({ productId }) {
    return io.get(`/product/${productId}`).then(handleVerify);
  },
  // 获取首页商品
  getIndexProduct({ typeId }) {
    return io.get(`/product/section/${typeId}`).then(handleVerify);
  },
  // 获取用户详情
  getUserDetail({ userId }) {
    return io.get(`/user/${userId}`).then(handleVerify);
  },
  // 编辑用户详情
  editUserDetail(data = {}) {
    return io.post('/user/', data).then(handleVerify);
  },
  // 获取地址列表
  getAddressList({ userId }) {
    return io.get(`/address/list/${userId}`).then(handleVerify);
  },
  // 获取详细地址
  getAddressItem({ addressId }) {
    return io.get(`/address/item/${addressId}`).then(handleVerify);
  },
  // 编辑地址
  editAddress(data = {}) {
    return io.post('/address/edit/', data).then(handleVerify);
  },
  // 添加地址
  addAddress(data = {}) {
    return io.post('/address/add/', data).then(handleVerify);
  },
  // 生成订单
  generateOrder(data = {}) {
    return io.post('/order/create', data).then(handleVerify);    
  },
  // 获取订单列表
  getOrderList({ userId }) {
    return io.get(`/order/list/${userId}`).then(handleVerify);
  },
  // 获取订单详情
  getOrderDetail({ orderId }) {
    return io.get(`/order/detail/${orderId}`).then(handleVerify);
  },
}
