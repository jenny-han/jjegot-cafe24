import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SignUpAgreeModal from './SignUpAgreeModal';

SignupAgreeBox.propTypes = {
        
};

function SignupAgreeBox(props) {
    const {id, name, onChange, value, text } = props;
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <div className='agree-list'>
            <input type="checkbox" id={id} name={name} value={value} onChange={onChange} ></input>
            <label htmlFor={id}>{text}</label>

             { name !== 'agreeFourteen' && <span onClick={showModal} className='btn-contents'></span> }
            {modalOpen && <SignUpAgreeModal name={name} setModalOpen={setModalOpen} /> }
        </div>
    );
}

export default SignupAgreeBox;