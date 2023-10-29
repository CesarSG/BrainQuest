import { answers } from "../database/data";

export function attempts_number(result){
    return result.filter(r => r !== undefined).length;
}

export function correct_answers(result){
    return result.filter((element, i) => answers[i] === element).length
}

export function earnPoints_number(result, answers, points){
    return result.map((element, i) => answers[i] === element)
                .filter(i => i)
                .map(i => points)
                .reduce((prev, current) => prev + current, 0)
}

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints
}