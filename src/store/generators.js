/**
 * Function that generates voting questions
 * 
 * @param idFrom - id of the first question, starting from
 * which the ids of subsequent questions will be generated
 * @param number - number of questions to generate
 * @param answeredQuestions - number of questions already
 * answered. the value of the answer is substituted randomly
 */
import {answerTypes} from "../enum/answerTypes";

export const generateQuestions = (idFrom, number, answeredQuestions = 0) => {
    const questions = [];
    
    for (let i = 0; i < number; i++) {
        questions.push({
            id: idFrom + i,
            title: 'Заголовок ' + idFrom + i,
            description: 'Основной текст вопроса ' + idFrom + i,
            result: i < answeredQuestions ? _getRandomAnswer() : null,
            answers: [
                {
                    id: 1,
                    type: answerTypes.confirmed
                },
                {
                    id: 2,
                    type: answerTypes.declined
                },
                {
                    id: 3,
                    type: answerTypes.abstained
                }
            ]
        })
    }
    
    return questions;
}

const _getRandomAnswer = () => {
    const answers = Object.keys(answerTypes).map(type => answerTypes[type]);
    
    return answers[Math.floor(Math.random() * answers.length)];
}