import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { resetAllAction } from '../reducer/questions_reducer'
import { resetResultAction } from '../reducer/result_reducer'
import { useDispatch, useSelector } from 'react-redux'
import { attempts_number, correct_answers, earnPoints_number, flagResult } from '../helper/helper'

export default function Result() {

    const dispatch = useDispatch()
    const { queue, answers } = useSelector(state => state.questions)
    const { result, userId } = useSelector(state => state.result)

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }   

    const totalPoints = queue.length * 10;
    const totalQuestions = queue.length
    const attemps = attempts_number(result)
    const earnPoints = earnPoints_number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)
    const correctAnswers = correct_answers(result)


    return (
        <div>
            <h1>Result quiz</h1>

            <div>
                <span>Username: </span>
                <span>Cesar</span>
            </div>
            <div>
                <span>Answer questions: </span>
                <span>{ attemps || 0 } of { totalQuestions }</span>
            </div>
            <div>
                <span>Correct answers: </span>
                <span>{ correctAnswers || 0 }</span>
            </div>
            <div>
                <span>Quiz result: </span>
                <span>{ flag ? "Passed": "Failed" }</span>
            </div>

            <div>
                <Link to={'/'} onClick={onRestart}>Home</Link>
            </div>
        </div>
    )
}
