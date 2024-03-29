import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Img from '../../../assets/img/modal.svg';
import '../../../assets/sass/components/UI/Modal/_modal.scss';

const Modal = (props) => {
    return(
        <>
            <Backdrop backdropAction={props.backdropAction} />
            <div className="modal">
                <img src={Img} alt="" />
                <h4>{props.title}</h4>
                <p>{props.txt}</p>
                {props.children}
            </div>     
        </>           
    );        
}

export default Modal;