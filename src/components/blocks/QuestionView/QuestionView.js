import './QuestionView.scss';
import {getNumber} from "../../../helpers/getNumberInText";

const MAX_DESCRIPTION_LENGTH = 30;

export const QuestionView = ({question, questionNumber, showModal, isBtnDisabled}) => {
    const getDescription = () => {
        let str = question.description ? question.description.slice(0, MAX_DESCRIPTION_LENGTH) : '';
        if (question.description?.length > str.length) {
            str += '...';
        }
        
        return str;
    }
    
    return <>
        <div className="questionViewDivider" />
        
        <div className="questionView">
            <p className="questionView__number">{getNumber(questionNumber)} вопрос</p>
            <p className="questionView__title">{question.title}</p>
            <p className="questionView__description">{getDescription()}</p>
            
            <button
                className="questionView__more questionView__link"
                onClick={showModal}
            >Подробнее</button>
            
            <div className="questionView__links">
                <button className="questionView__link"><span className="icon">?</span>Задать вопрос</button>
                
                <div className="divider" />
                
                <a className="questionView__link" href="#" target="_blank">Как проголосовать</a>
            </div>

            {/* TODO сделать круговую статистику по голосованию */}
            
            <button
                className="questionView__voteBtn button"
                onClick={showModal}
                disabled={isBtnDisabled}
            >Проголосовать</button>
        </div>
    </>;
}