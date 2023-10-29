import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useFetchQuestion } from '../hooks/FecthQuestions';
import { updateResult } from '../hooks/setResult';

export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)
    const [{isLoading, apiData, serverError}] = useFetchQuestion()

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResult({ trace, checked }))
    }, [checked])

    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked }))
    }

    if(isLoading) return <h3>Loading</h3>
    if(serverError) return <h3>{serverError || "Unknown error"}</h3>

    return (
        <div>
            <h2>{questions?.question}</h2>

            <ul key={questions?.id}>
                {
                    questions?.options.map((q, index) => (
                        <li key={index}>
                            <input 
                                type='radio' 
                                value={checked}
                                name='options'
                                id={`q${index}-option`}
                                onChange={() => onSelect(index)}
                                checked={result[trace] === index || (result[trace] && index === checked)}
                            />
                            <label htmlFor={`q${index}-option`}>{q}</label>
                            <div>{ result[trace] === index ? <p>Selected</p> : null }</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
