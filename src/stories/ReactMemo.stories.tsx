import React from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const Users = (props: {users: Array<string>}) => {
    return <div>{
        props.users.map((u,i)=><div key={i}>{u}</div>)
    }</div>
}

export const Example1 = () => {
    return <>
        <NewMessageCounter count={10} />
        <Users users={['Bob','Alex','Ann']}/>
    </>
}

