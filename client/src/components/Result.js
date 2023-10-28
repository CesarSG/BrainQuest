import React from 'react'
import { Link } from 'react-router-dom'

import { resetAllAction } from '../reducer/questions_reducer'
import { resetResultAction } from '../reducer/result_reducer'
import { useDispatch } from 'react-redux'

export default function Result() {

    const dispatch = useDispatch()

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }   

    return (
        <div>
            <h1>Result quiz</h1>

            <div>
                <span>Username: </span>
                <span>Cesar</span>
            </div>
            <div>
                <span>Correct answers: </span>
                <span>2</span>
            </div>
            <div>
                <span>Quiz result: </span>
                <span>passed</span>
            </div>

            <div>
                <Link to={'/'} onClick={onRestart}>Home</Link>
            </div>
        </div>
    )
}
