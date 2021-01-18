import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/products/all', { params });
  },
  remove({ id }) {
    return axios.delete(`/products/${id}`);
  },
  add(params) {
    return axios.post('/products/add', params);
  },
  detail(id) {
    return axios.get(`/products/${id}`);
  },
  edit(params) {
    return axios.put('/products/edit', params);
  },
};
