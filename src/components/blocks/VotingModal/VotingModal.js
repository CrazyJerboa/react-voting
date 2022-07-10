import './VotingModal.scss';
import {useEffect, useRef, useState} from "react";

import {VotingButtons} from "./VotingButtons/VotingButtons";

const MAX_DESCRIPTION_LENGTH = 50;

export const VotingModal = ({question, vote}) => {
    const [isDescriptionOpened, setDescriptionState] = useState(false);
    const [isEngTranslate, changeTranslationState] = useState(false);
    const [answer, setAnswer] = useState(null);
    
    useEffect(() => {
        if (question.numberOfCandidates && question.numberOfCandidates > 1) {
            setAnswer(Array(question.numberOfCandidates).fill(null));
        }
    }, []);
    
    const toggleDescription = () => {
        setDescriptionState(!isDescriptionOpened);
    }
    
    const toggleTranslate = () => {
        changeTranslationState(!isEngTranslate);
    }
    
    const getDescription = () => {
        const description = isEngTranslate ? question.description_en : question.description;
        let str = description ? description.slice(0, MAX_DESCRIPTION_LENGTH) : '';
        
        if (description?.length > str.length) {
            str += '...';
        }

        return isDescriptionOpened ? description : str;
    }
    
    const updateAnswers = (newAnswer, index) => {
        if (typeof index === 'number') {
            const answers = answer;
            
            answers[index] = newAnswer;
            setAnswer([...answers]);
        } else {
            setAnswer(newAnswer);
        }
    }
    
    const checkSubmitButton = () => {
        if (Array.isArray(answer)) {
            let nullCount = 0;
            
            answer.forEach(r => {
                if (!r) {
                    nullCount++;
                }
            })
            
            return nullCount > 0;
        }

        return !answer;
    }

    return <div className="votingModal">
        <div className="votingModal__text">
            <div className="votingModal__textInner">
                {getDescription()}
            </div>
            
            <div className="votingModal__textButtons">
                {/* специально сделал чекбоксом, т.к. это указано в ТЗ */}
                <label className="btnTranslate button button-gray">
                    <input
                        type="checkbox"
                        checked={isEngTranslate}
                        onChange={toggleTranslate}
                    />
                    translate
                </label>
                
                <button
                    className="btnToggleText button button-gray"
                    onClick={toggleDescription}
                />
            </div>
        </div>

        <div className="votingModal__buttons">
            {question.numberOfCandidates && question.numberOfCandidates > 1 && Array.isArray(answer) ?
                answer.map((_, index) => {
                    return <VotingButtons
                        key={index}
                        title={'Кандидат номер ' + (index + 1)}
                        index={index}
                        answer={answer[index]}
                        setAnswer={updateAnswers}
                    />
                })
                :
                <VotingButtons
                    answer={answer}
                    setAnswer={updateAnswers}
                />
            }
        </div>
        
        <div className="votingModal__confirm">
            <button
                className="button"
                onClick={() => vote(answer)}
                disabled={checkSubmitButton()}
            >Проголосовать</button>
        </div>
    </div>;
}