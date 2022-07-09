import {generateQuestions} from "./generators";

export const accounts = [
    {
        id: 11122435,
        userId: 10000001055486,
        stockCount: 990000,
        questions: generateQuestions({idFrom: 1, number: 2, numberOfCandidates: 2, accountId: 11122435})
    },
    {
        id: 12122435,
        userId: 10000001055486,
        stockCount: 1230000,
        questions: generateQuestions({idFrom: 7, number: 9, answeredQuestions: 3, isCumulative: true, accountId: 12122435})
    },
    {
        id: 12345678,
        userId: 10000001055486,
        stockCount: 1234567,
        questions: generateQuestions({idFrom: 31, number: 3, accountId: 12345678})
    }
];