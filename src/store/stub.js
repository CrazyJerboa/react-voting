import {generateQuestions} from "./generators";

export const accounts = [
    {
        id: 11122435,
        userId: 10000001055486,
        sharesCount: 990000,
        questions: generateQuestions({idFrom: 1, number: 2, numberOfCandidates: 2, accountId: 11122435})
    },
    {
        id: 12122435,
        userId: 10000001055486,
        sharesCount: 10,
        questions: generateQuestions({idFrom: 7, number: 4, answeredQuestions: 3, isCumulative: true, accountId: 12122435})
    },
    {
        id: 12345678,
        userId: 10000001055486,
        sharesCount: 1234567,
        questions: generateQuestions({idFrom: 31, number: 3, accountId: 12345678})
    }
];