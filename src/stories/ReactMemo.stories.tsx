import React, { useState } from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = ( props: {count: number} ) => {
    console.log('Render Counter')
    return <div>{ props.count }</div>
}

const UsersSecret = ( props: {users: Array<string>} ) => {
    console.log('Render Users')
    return <div>{
        props.users.map(( u, i ) => <div key={ i }>{ u }</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    // console.log('Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Bob', 'Alex'])

    return <>
        <button onClick={ () => {
            setCounter(counter + 1)
        } }>
            +
        </button>
        <button onClick={ () => {
            setUsers([...users, 'Ann' + new Date().getTime()])
        } }>
            Add user
        </button>
        <NewMessageCounter count={ counter } />
        <Users users={ users } />
    </>
}

