import React, { useEffect, useState, useRef } from 'react';
import agreezip from '../store/Agreement.json'
import useOutsideClick from '../hooks/useOutsideClick'
// import { useOutsideClick } from '@chakra-ui/react'


const SignUpAgreeModal = (props) => {
    const {name, setModalOpen} = props;
    const [title, setTitle] = useState(agreezip[name].title)
    const [contents, setContents] = useState(agreezip[name].contents)    
   
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