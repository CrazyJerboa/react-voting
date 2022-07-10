import {number} from "../enum/numbers";

export const getNumber = numForText => {
    const text = number[numForText];
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
}