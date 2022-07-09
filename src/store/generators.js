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

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda autem culpa cumque deleniti doloribus error et, eum eveniet explicabo fugiat illum ipsam laboriosam magnam maiores minima minus molestiae molestias natus nihil nulla officia officiis placeat possimus quasi repellendus saepe sed similique ullam voluptatum. Aspernatur consectetur deleniti distinctio esse facere illo itaque laudantium magni maiores, nobis, odio quibusdam reprehenderit sapiente, soluta tempora? Aliquam aperiam cupiditate distinctio, ea expedita explicabo fuga laboriosam magni, minima, nisi quasi quibusdam ratione reprehenderit repudiandae ut. Cupiditate ducimus eaque est eum ipsam maiores nihil quam saepe, tempore? Aperiam deserunt eius hic inventore nisi perspiciatis sunt voluptas?';

export const generateQuestions = ({idFrom, number, answeredQuestions, numberOfCandidates, isCumulative, accountId}) => {
    const questions = [];
    
    for (let i = 0; i < number; i++) {
        questions.push({
            id: idFrom + i,
            accountId,
            title: 'Заголовок ' + (idFrom + i),
            description: i === 0 ? lorem : 'Основной текст вопроса ' + (idFrom + i),
            description_en: i === 0 ? 'English version of text. ' + lorem : 'English version of text. Основной текст вопроса ' + (idFrom + i),
            result: answeredQuestions && i < answeredQuestions ? _getRandomAnswer() : null,
            numberOfCandidates: !isCumulative && i === number - 1,
            isCumulative: isCumulative && i === number - 1,
            stocksCount: isCumulative ? 999999 : null,
            answers: !isCumulative ? [
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
            ] : null,
            candidates: isCumulative ? [
                {
                    id: 1,
                    votes: 10
                },
                {
                    id: 2,
                    votes: 20
                },
                {
                    id: 3,
                    votes: 30
                },
                {
                    id: 4,
                    votes: 40
                }
            ] : null
        })
    }
    
    return questions;
}

const _getRandomAnswer = () => {
    const answers = Object.keys(answerTypes).map(type => answerTypes[type]);
    
    return answers[Math.floor(Math.random() * answers.length)];
}