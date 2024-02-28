import client from './client';

// 로그인
export const getCustomer = () => {
  return client.get('/api/customer').then((res) => {
    console.log(res.data);
    return res.data;
  });
};
