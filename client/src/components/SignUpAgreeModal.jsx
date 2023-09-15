import React, { useRef } from 'react';
import useOutsideClick from '../hooks/useOutsideClick'


const SignUpAgreeModal = (props) => {
    const {title, contents, setModalOpen} = props;

    const closeModal = () => {
        setModalOpen(false)
    }
    
    const modalRef =  useRef(null);

    useOutsideClick(modalRef, ()=>setModalOpen(false))


    return (
        <div className='modal-div' ref={modalRef}>
            <div className='modal-title'> 
                <p> {title} </p>
                <span className='btn-modal-close' onClick={closeModal}></span>
            </div>
            <div className='modal-contents' dangerouslySetInnerHTML={ {__html:  contents} }>
            </div>
        </div>
    );
};

export default SignUpAgreeModal;