import {answerTypes} from "../../../../enum/answerTypes";
import {ReactComponent as IconCheck} from "../../../../assets/icons/check.svg";
import {ReactComponent as IconPause} from "../../../../assets/icons/pause.svg";
import {ReactComponent as IconDecline} from "../../../../assets/icons/decline.svg";
import './VotingButtons.scss';

export const VotingButtons = ({index, title, answer, setAnswer}) => {
    const getClasses = (type) => {
        let classes = '';
        if (answer) {
            if (answer !== type) {
                classes += ' inactive';   
            } else {
                classes += ' selected';
            }
        }
        return classes;
    }
    
    return <div className="votingButtons">
        {title && <p className="votingButtons__title">{title}</p>}
        
        <button
            className={'button btnConfirmed' + getClasses(answerTypes.confirmed)}
            onClick={() => setAnswer(answerTypes.confirmed, index)}
        >
            <IconCheck />
            За
        </button>

        <button
            className={'button btnAbstained' + getClasses(answerTypes.abstained)}
            onClick={() => setAnswer(answerTypes.abstained, index)}
        >
            <IconPause />
            Воздержался
        </button>

        <button
            className={'button btnDeclined' + getClasses(answerTypes.declined)}
            onClick={() => setAnswer(answerTypes.declined, index)}
        >
            <IconDecline />
            Против
        </button>
    </div>;
}