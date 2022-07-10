import {useState} from "react";
import {VotingButtons} from "../VotingModal/VotingButtons/VotingButtons";
import InputRange from "react-input-range";
import 'react-input-range/src/scss/index.scss';
import './CumulativeVoting.scss';
import {answerTypes} from "../../../enum/answerTypes";

export const CumulativeVoting = ({answer, sharesCount, candidatesCount, setAnswer, setVotes}) => {
    const [votes, updateVotes] = useState(Array(candidatesCount).fill(0));

    const changeVotes = (value, index) => {
        const newVotes = votes;
        
        if (!value || value < 0) {
            value = 0;
        }
        
        if (value > sharesCount * candidatesCount) {
            value = sharesCount * candidatesCount;
        }
        
        newVotes[index] = value;

        let count = newVotes.reduce((prev, curr) => prev + curr);
        
        const _fillVotes = (count) => {
            const checkedArray = [...newVotes];
            checkedArray[index] = 0;
            const maxIndex = checkedArray.indexOf(Math.max.apply(null, checkedArray));
            
            if (count < 0) {
                newVotes[maxIndex] += count;
            } else {
                newVotes[maxIndex] += (sharesCount * candidatesCount - count);
            }

            if (newVotes[maxIndex] < 0) {
                let diff = newVotes[maxIndex];
                newVotes[maxIndex] = 0;
                
                _fillVotes(diff);
            }
        }
        
        if (count > sharesCount * candidatesCount) {
            _fillVotes(count);
        }
        
        updateVotes([...newVotes]);
    }
    
    const getMaxValue = () => {
        return sharesCount * candidatesCount;
    }
    
    const updateAnswers = (newAnswer, index) => {
        setAnswer(newAnswer, index);
        setVotes(newAnswer === answerTypes.confirmed ? votes : null);
    }
    
    return <div className="cumulativeVoting">
        <VotingButtons
            answer={answer}
            setAnswer={updateAnswers}
        />

        {answer && answer === answerTypes.confirmed && <>
            <div className="cumulativeVoting__shares">
                <p>Акций</p>
                <p>{sharesCount}</p>
            </div>
            
            <div className="cumulativeVoting__candidates">
                {votes && votes.map((value, index) => {
                    return <div key={index} className="cumulativeVoting__candidate">
                        <p className="cumulativeVoting__candidateName">Кандидат номер {index + 1}</p>
    
                        <div className="cumulativeVoting__candidateInner">
                            <InputRange
                                value={value}
                                maxValue={getMaxValue()}
                                minValue={0}
                                formatLabel={_ => null}
                                onChange={value => changeVotes(parseInt(value), index)} />
    
                            <input
                                type="number"
                                className="cumulativeVoting__candidateField"
                                value={value}
                                min={0}
                                max={getMaxValue()}
                                onChange={(e) => changeVotes(parseInt(e.target.value), index)}
                            />
                        </div>
                    </div>
                })}
            </div>
        </>}
    </div>;   
}