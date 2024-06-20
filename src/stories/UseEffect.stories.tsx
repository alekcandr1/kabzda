import React, { useEffect, useMemo, useState } from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        // debugger
        console.log('useEffect')
        document.title = counter.toString()

        //api.getUsers().then('')
        //setInterval
        //indexedDB
        // document.getElementById()

    }, [counter])

    return <>
        Hello, { counter }
        <button onClick={ () => setCounter(counter + 1) }>+</button>
        <button onClick={ () => setFake(1) }>fake</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log('SimpleExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(0)


    useEffect(() => {
        // debugger
        console.log('useEffect')

        setInterval(() => {

        }, 1000)

    }, [])


    return <>
        Hello, { counter }
        <button onClick={ () => setCounter(counter + 1) }>+</button>
        <button onClick={ () => setFake(1) }>fake</button>
        <div>Counter: { counter }, fake: { fake }</div>

    </>
}
