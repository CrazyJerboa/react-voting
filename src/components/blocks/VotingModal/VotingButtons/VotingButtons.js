import {answerTypes} from "../../../../enum/answerTypes";
import {ReactComponent as IconCheck} from "../../../../assets/icons/check.svg";
import {ReactComponent as IconPause} from "../../../../assets/icons/pause.svg";
import {ReactComponent as IconDecline} from "../../../../assets/icons/decline.svg";
import './VotingButtons.scss';

export const VotingButtons = ({index, title, answer, setAnswer}) => {
    return <div className="votingButtons">
        {title && <p className="votingButtons__title">{title}</p>}
        
        <button
            className={'button btnConfirmed' + (answer && answer !== answerTypes.confirmed ? ' inactive' : '')}
            onClick={() => setAnswer(answerTypes.confirmed, index)}
        >
            <IconCheck />
            За
        </button>

        <button
            className={'button btnAbstained' + (answer && answer !== answerTypes.abstained ? ' inactive' : '')}
            onClick={() => setAnswer(answerTypes.abstained, index)}
        >
            <IconPause />
            Воздержался
        </button>

        <button
            className={'button btnDeclined' + (answer && answer !== answerTypes.declined ? ' inactive' : '')}
            onClick={() => setAnswer(answerTypes.declined, index)}
        >
            <IconDecline />
            Против
        </button>
    </div>;
}