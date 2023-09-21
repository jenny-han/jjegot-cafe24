import React, { useEffect, useState } from 'react';
import SignUpAgreeModal from './SignUpAgreeModal';

SignupAgreeBox.propTypes = {
        
};

function SignupAgreeBox(props) {
    const {id, name, onChange, value, title, isRequired , contents} = props;
    const [modalOpen, setModalOpen] = useState(false);
    const [text, setText] = useState("")
   
    useEffect(() => {
        let mkText = isRequired ? "[필수] " : "[선택] ";
        mkText += title;
        setText(mkText)
        
    },[isRequired, title]);

    const showModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <div className='agree-list'>
            <input type="checkbox" id={id} name={name} checked={value} onChange={onChange} 
            required = {isRequired}
            ></input>
            <label htmlFor={id}>{text}</label>

             { name !== 'agreeFourteen' && <span onClick={showModal} className='btn-contents'></span> }
            {modalOpen && <SignUpAgreeModal title={title} contents={contents} setModalOpen={setModalOpen} /> }
        </div>
    );
}

export default SignupAgreeBox;