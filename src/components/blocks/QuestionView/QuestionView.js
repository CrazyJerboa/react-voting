import {number} from "../../../enum/numbers";
import './QuestionView.scss';

export const QuestionView = ({question, questionNumber}) => {
    console.log(question)
    return <>
        <div className="questionViewDivider" />
        
        <div className="questionView">
            <p className="questionView__number"><span>{number[questionNumber]}</span> вопрос</p>
            <p className="questionView__title">{question.title}</p>
            <p className="questionView__description">{question.description}</p>
            
            <button className="questionView__more questionView__link">Подробнее</button>
            
            <div className="questionView__links">
                <button className="questionView__link"><span className="icon">?</span>Задать вопрос</button>
                
                <div className="divider" />
                
                <a className="questionView__link" href="#" target="_blank">Как проголосовать</a>
            </div>

            {/* TODO сделать круговую статистику по голосованию */}
            
            <button className="questionView__voteBtn button">Проголосовать</button>
        </div>
    </>;
}