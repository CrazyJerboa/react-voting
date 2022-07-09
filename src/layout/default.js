import {pseudoApi} from "../api";
import {useDispatch} from "react-redux";
import {setAccounts} from "../store/slices/main";
import './default.scss';

export const DefaultLayout = ({ children }) => {
    const dispatch = useDispatch();
    
    pseudoApi.getAccounts()
        .then(response => dispatch(setAccounts(response)));
    
    return <div className="container">
        {children}
    </div>;
}