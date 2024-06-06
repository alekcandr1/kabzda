import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';

export default {
    title: 'Use Memo'
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
        } }>+
        </button>
        <button onClick={ () => {
            setUsers([...users, 'Ann ' + new Date().getTime()])
        } }>Add user
        </button>

        { counter }
        <Users users={ newArray } />
    </>
}


type BooksSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret = ( props: BooksSecretPropsType ) => {
    console.log('Render Users')
    return <div>
        <button onClick={ props.addBook }>Add book</button>
        { props.books.map(( u, i ) => <div key={ i }>{ u }</div>) }
    </div>
}
const Books = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'Angular'])

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])

    const addBook = () => {
        setBooks([...books, 'TSa'])
    }

    const memoizedAddBook = useMemo(()=>addBook, [books])

    return <>
        <button onClick={ () => {
            setCounter(counter + 1)
        } }>+
        </button>
        { counter }

        <Books books={ newArray } addBook={memoizedAddBook} />
    </>
}

export const RealityUseCallback = () => {
    console.log('RealityUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'Angular'])

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])

    const memoizedAddBook = useCallback(()=> {
        setBooks([...books, 'TSa'])
    }, [books])

    return <>
        <button onClick={ () => {
            setCounter(counter + 1)
        } }>+
        </button>
        { counter }

        <Books books={ newArray } addBook={memoizedAddBook} />
    </>
}


