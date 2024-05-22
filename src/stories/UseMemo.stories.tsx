// @flow
import * as React from 'react';
import exp from 'constants';
import { useMemo, useState } from 'react';

export default {
    title: 'Use Memo'
}

const DifficultCountingExample = () => {

}

const UsersSecret = ( props: {users: Array<string>} ) => {
    console.log('Render Users')
    return <div>{
        props.users.map(( u, i ) => <div key={ i }>{ u }</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('Helps to React memo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Bob', 'Alex', 'Ann'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={ () => {
            setCounter(counter + 1)
        } }>
            +
        </button>

        <button onClick={ () => {
            setUsers([...users, 'Ann ' + new Date().getTime()])
        } }>
            Add user
        </button>

        { counter }
        <Users users={ newArray } />
    </>
}

