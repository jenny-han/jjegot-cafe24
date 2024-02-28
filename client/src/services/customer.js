import axios from 'axios';
import { Link } from 'react-router-dom';

function signup(ele) {
  if (ele.password !== ele.passwordConfirm) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }
  axios
    .post(`${process.env.REACT_APP_SERVER}/db/customer/insert`, getParam(ele))
    .then((res) => {
      console.log(res);
      if (alert('회원가입이 완료되었습니다.')) return <Link to="/login" />;
    })
    .catch((err) => {
      console.log(err);
      alert(
        '회원가입 진행 중 오류가 발생하였습니다. 잠시 후에 다시 시도해주세요.',
      );
    });
}

const getParam = (d) => {
  return new URLSearchParams({
    userId: d.userId.value,
    password: d.password.value,
    userName: d.userName.value,
    email: d.email.value,
    phone: d.phone.value,
    agreeMarketing: d.agreeMarketing.checked ? 1 : 0,
  });
};

async function signupCheckId(id) {
  try {
    await axios
      .get(`${process.env.REACT_APP_SERVER}/db/customer/checkId`, {
        params: { userId: id },
      })
      .then((res) => {
        // console.log(res.data.length);
        if (res.data.length === 0) {
          alert('사용가능한 아이디 입니다');
          return true;
        } else {
          alert('사용중인 아이디입니다.');
          return false;
        }
      });
  } catch (e) {
    console.log(e);
    alert('아이디 중복 확인 중 오류가 발생했습니다.');
  }
}
export { signup, signupCheckId };
