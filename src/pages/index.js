import {AccountsCarousel} from "../components/blocks/AccountsCarousel/AccountsCarousel";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {QuestionView} from "../components/blocks/QuestionView/QuestionView";
import React from ".";
import ModalPortal from "../components/portals/modalPortal/modalPortal";
import Modal from "../components/common/modal/modal";
import {clearModalName, setModalName, updateQuestionResults} from "../store/slices/main";
import {VotingModal} from "../components/blocks/VotingModal/VotingModal";
import {getNumber} from "../helpers/getNumberInText";

export const MainPage = () => {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState({});
    const [questionNumber, setQuestionNumber] = useState(0);
    const [isAllQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
    const accounts = useSelector((state) => state.main.accounts);
    const openedModalName = useSelector(state => state.main.modalName);

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

            setAllQuestionsAnswered(!question);
            
            setQuestion(question ? question : questions[questions.length - 1]);
            setQuestionNumber(question ? questionIndex + 1 : questions.length);
        }
    }
    
    const vote = (result) => {
        dispatch(updateQuestionResults({
            accountId: question.accountId,
            questionId: question.id,
            result
        }));

        dispatch(clearModalName());
    }

    const showModal = () => {
        dispatch(setModalName('votingModal'));
    };
    
    return <div className="pageMain">
        <AccountsCarousel
            slides={accounts}
            slideChanged={getLastQuestions}
        />

        {question && 
            <QuestionView
                question={question}
                questionNumber={questionNumber}
                showModal={showModal}
                isBtnDisabled={isAllQuestionsAnswered}
            />
        }

        {!!openedModalName && openedModalName === 'votingModal' && <ModalPortal>
            <Modal
                name={'votingModal'}
                title={getNumber(questionNumber) + ' вопрос'}
            >
                <VotingModal
                    question={question}
                    vote={vote}
                />
            </Modal>
        </ModalPortal> }
    </div>;
}
