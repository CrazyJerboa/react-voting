import {generateQuestions} from "./generators";

export const accounts = [
    {
        id: 11122435,
        userId: 10000001055486,
        stockCount: 990000,
        questions: generateQuestions(1, 2)
    },
    {
        id: 12122435,
        userId: 10000001055486,
        stockCount: 1230000,
        questions: generateQuestions(7, 9, 3)
    },
    {
        id: 12345678,
        userId: 10000001055486,
        stockCount: 1234567,
        questions: generateQuestions(31, 3)
    }
];