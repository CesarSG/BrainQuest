import React from 'react'
import { Link } from 'react-router-dom'

export default function Result() {
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
                <Link to={'/'}>Home</Link>
            </div>
        </div>
    )
}
