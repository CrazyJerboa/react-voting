import {useEffect} from "react";
import * as ReactDOM from "react-dom";

const modalRoot = document.getElementById('modal-root');

const ModalPortal = ({ children }) => {
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(el);

        return () => {
            modalRoot.removeChild(el);
        };
    }, [el]);

    return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
