import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Main() {

    const inputRef = useRef(null)

    return (
        <div>
            <form id='form'>
                <input ref={inputRef} type='text' placeholder='Username' />
            </form>

            <div>
                <Link className='btn' to={'quiz'}>Start</Link>
            </div>
        </div>
    )
}
