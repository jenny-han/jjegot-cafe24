import React, { useState } from 'react';
import SignupAgreeBox from './SignupAgreeBox';
import { Agreemets } from '../store/Agreement';

function SignUpAgree() {

    const [agreeAll, setAgreeAll] = useState(false)
    const [isCheck, setIsCheck] = useState([]);
    const [list, setlist] = useState(Agreemets)

    const handleAgreeAll = (e) => {
        setAgreeAll(e.target.checked)
        setIsCheck(list.map(li => li.id));
        if (agreeAll) {
          setIsCheck([]);
        }
    }

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    
    //체크 해제 하는 경우
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
      setAgreeAll(false)
    }
    else{
        //  check 시 전체 항목에 체크하게 되는 경우
        if(isCheck.length === list.length -1) setAgreeAll(true)
    }
    
  };

 

    const agreeList = list.map(({id, name, title, contents, require})=> {
        return (
            <SignupAgreeBox id={id} key={id} name={name} title={title} contents={contents} onChange ={handleClick} value={isCheck.includes(id)} isRequired={require} />
        )
    })

    return (
        <div className='agree-form'>
            <div>
                <input type="checkbox" id='allagree' name='agreeAll' checked={agreeAll} onChange={handleAgreeAll}></input>
                <label htmlFor='allagree' className='allagree-label'>전체동의</label>
            </div>
            <p>
                • 전체 동의는 필수 및 선택 항목에 대한 동의를 포함합니다.<br></br>
                • 선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.
            </p>
            <div className='agree-div'>
                { agreeList }
            </div>

        </div>
    );
};

export default SignUpAgree;