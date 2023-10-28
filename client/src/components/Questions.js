import React, { useEffect, useState } from 'react'
import data from '../database/data'

export default function Questions() {

    const [checked, setChecked] = useState(undefined)

    const question = data[0];

    useEffect(() => {
        console.log("he")
    })

    function onSelect(){
        console.log("select")
    }

    return (
        <div>
            <h2>{question.question}</h2>

            <ul key={question.id}>
                {
                    question.options.map((q, index) => (
                        <li key={index}>
                            <input 
                                type='radio' 
                                value={checked}
                                name='options'
                                id={`q${index}-option`}
                                onChange={onSelect}
                            />
                            <label htmlFor={`q${index}-option`}>{q}</label>
                            <div></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
