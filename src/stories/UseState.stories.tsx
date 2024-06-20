import React, { useMemo, useState } from 'react';

export default {
    title: 'useState demo'
}

export const Example1 = () => {
    console.log('Example1')

    const diffFunction = () => {
        console.log('diffFunction()')
        return (65465463120)
    }

    let initState = useMemo(diffFunction, [])
    const [counter, setCounter] = useState(initState)
    const changer = ( state: number ) => {
        return state + 1
    }
    return <>
        <button onClick={ () => setCounter(changer) }>
            +
        </button>
        { counter }
    </>
}

