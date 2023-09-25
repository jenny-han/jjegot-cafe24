
import axios from "axios";
import { Link } from 'react-router-dom';

function signup(ele) {
    axios.post(`${process.env.REACT_APP_SERVER}/db/customer/insert`, 
    getParam(ele)
    ).then((res) => {
        console.log(res);
        if(alert("회원가입이 완료되었습니다."))
            return <Link to='/login'  />
    
    }).catch((err) => {
        console.log(err);
        alert("회원가입 진행 중 오류가 발생하였습니다. 잠시 후에 다시 시도해주세요.");
    })
}

const getParam = (d) => {
    return new URLSearchParams({
         userId : d.userId.value,
         password : d.password.value,
         userName : d.userName.value,
         email : d.email.value,
         phone : d.phone.value,
         agreeMarketing : d.agreeMarketing.checked ? 1 : 0
     })
 }

export {signup};