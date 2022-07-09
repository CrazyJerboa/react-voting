import {AccountsCarousel} from "../components/blocks/AccountsCarousel/AccountsCarousel";
import {useSelector} from "react-redux";
import {useState} from "react";
import {QuestionView} from "../components/blocks/QuestionView/QuestionView";

export const MainPage = () => {
    const [question, setQuestion] = useState({});
    const [questionNumber, setQuestionNumber] = useState(0);
    const accounts = useSelector((state) => state.main.accounts);
    
    const getLastQuestions = (slideIndex) => {
        if (accounts?.length) {
            const questions = accounts[slideIndex].questions;
            let questionIndex = 0;

            const question = questions.find((question, index) => {
                if (!question.result) {
                    questionIndex = index;
                }

                return !question.result;
            });

            setQuestion(question ? question : questions[questions.length - 1]);
            setQuestionNumber(questionIndex + 1);
        }
    }
    
    return <div className="pageMain">
        <AccountsCarousel
            slides={accounts}
            slideChanged={getLastQuestions}
        />

        {question && 
            <QuestionView
                question={question}
                questionNumber={questionNumber}
            />
        }
    </div>;
}
