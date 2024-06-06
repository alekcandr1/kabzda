import React, { useMemo, useState } from 'react';

export default {
    title: 'useState demo'
}
//
// const NewMessageCounter = ( props: {count: number} ) => {
//     console.log('Render Counter')
//     return <div>{ props.count }</div>
// }
//
// const UsersSecret = ( props: {users: Array<string>} ) => {
//     console.log('Render Users')
//     return <div>{
//         props.users.map(( u, i ) => <div key={ i }>{ u }</div>)
//     }</div>
// }

// const Users = React.memo(UsersSecret)

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

