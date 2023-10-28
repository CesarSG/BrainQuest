import React, { useEffect } from 'react'
import Questions from './Questions';

import { useSelector } from 'react-redux'

export default function Quiz() {

    const state = useSelector(state => state)

    useEffect(() => {
        console.log(state)
    })

    function onNext(){
        console.log("On next")
    }

    function onPrev(){
        console.log("On onPrev")
    }

    return (
        <div>
            <h1>Quiz</h1>

            <Questions />

            <div>
                <button onClick={onPrev}>Previos</button>
                <button onClick={onNext}>Next</button>
            </div>
        </div>
    )
}
