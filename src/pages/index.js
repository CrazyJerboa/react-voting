import {AccountsCarousel} from "../components/blocks/AccountsCarousel/AccountsCarousel";
import {useSelector} from "react-redux";

export const MainPage = () => {
    const accounts = useSelector((state) => state.main.accounts);
    
    const getQuestions = (slideIndex) => {
        console.log(slideIndex)
    }
    
    return <div className="pageMain">
        <AccountsCarousel
            slides={accounts}
            slideChanged={getQuestions}
        />
    </div>;
}
