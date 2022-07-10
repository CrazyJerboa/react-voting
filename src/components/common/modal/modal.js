import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearModalName} from "../../../store/slices/main";
import './modal.scss';

const Modal = ({ name, title, subclass, children }) => {
    const dispatch = useDispatch();
    const openedModalName = useSelector(state => state.main.modalName);

    const [opacity, setOpacity] = useState('0');

    useEffect(() => {
        if (!!openedModalName && openedModalName === name) {
            setTimeout(() => setOpacity('1'), 10);
        }
    }, [openedModalName, name]);

    const hideModal = () => {
        setOpacity('0');

        setTimeout(() => dispatch(clearModalName()), 200);
    };

    return !!name && name === openedModalName && <div
        className={ `modal opened${ subclass ? ' ' + subclass : '' }` }
        style={{ opacity }}
    >
        <div className="before" onClick={ hideModal } />

        <div className="modal__inner">
            <div className="modal__body">
                { !!title && <div className="modal__title">
                    <p className="text">{ title }</p>
                    <button className="modal__close" onClick={ hideModal }>&times;</button>
                </div> }
                { children }
            </div>
        </div>
    </div>;
};

export default Modal;
