import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FecthQuestions';

import { useSelector, useDispatch } from 'react-redux'
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';

export default function Quiz() {

    const [check, setCheck] = useState(undefined)
    const result = useSelector(state => state.result.result)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()

    function onNext(){
        if(trace < queue.length){
            dispatch(MoveNextQuestion())

            // Add new result
            if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
        }
        setCheck(undefined)
    }

    function onPrev(){
        if(trace > 0){
            dispatch(MovePrevQuestion())
        }
    }

    function onChecked(check){
        console.log(check)
        setCheck(check)
    }

    if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace='true'/>
    }

    return (
        <div>
            <h1>Quiz</h1>

            <Questions onChecked={onChecked} />

            <div>
                { trace > 0 ? <button onClick={onPrev}>Previos</button> : <></> }
                <button onClick={onNext}>Next</button>
            </div>
        </div>
    )
}
