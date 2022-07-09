import './VotingModal.scss';
import {useState} from "react";

import {ReactComponent as IconCheck} from '../../../assets/icons/check.svg';
import {ReactComponent as IconPause} from '../../../assets/icons/pause.svg';
import {ReactComponent as IconDecline} from '../../../assets/icons/decline.svg';
import {answerTypes} from "../../../enum/answerTypes";

const MAX_DESCRIPTION_LENGTH = 50;

export const VotingModal = ({question, vote}) => {
    const [isDescriptionOpened, setDescriptionState] = useState(false);
    const [isEngTranslate, changeTranslationState] = useState(false);
    const [answer, setAnswer] = useState(null);
    
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
            <button
                className={'button btnConfirmed' + (answer && answer !== answerTypes.confirmed ? ' inactive' : '')}
                onClick={() => setAnswer(answerTypes.confirmed)}
            >
                <IconCheck />
                За
            </button>
            
            <button
                className={'button btnAbstained' + (answer && answer !== answerTypes.abstained ? ' inactive' : '')}
                onClick={() => setAnswer(answerTypes.abstained)}
            >
                <IconPause />
                Воздержался
            </button>
            
            <button
                className={'button btnDeclined' + (answer && answer !== answerTypes.declined ? ' inactive' : '')}
                onClick={() => setAnswer(answerTypes.declined)}
            >
                <IconDecline />
                Против
            </button>
        </div>
        
        <div className="votingModal__confirm">
            <button
                className="button"
                onClick={() => vote(answer)}
                disabled={!answer}
            >Проголосовать</button>
        </div>
    </div>;
}