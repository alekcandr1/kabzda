import React, { ChangeEvent, useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Simulate } from 'react-dom/test-utils';
import select = Simulate.select;

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input />

export const UncontrolledInputWithTrackedValue = () => {
    const [value, setValue] = useState('it')
    const onChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        setValue(e.currentTarget.value)
    }
    return <> <input value={ value } onChange={ onChange } /> - { value }
    </>

}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={ inputRef } />
        <button onClick={ save }>save
        </button>
        - actual value: { value }
    </>

}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={ parentValue } onChange={ onChange } />
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState<boolean>(false)
    const onChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        setValue(e.currentTarget.checked)
    }
    return <input checked={ value } type={ 'checkbox' } onChange={ onChange } />
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    const onChange = ( e: ChangeEvent<HTMLSelectElement> ) => {
        setValue(e.currentTarget.value)
    }
    return <select value={ value }onChange={ onChange }>
        <option value={ '1' }>Minsk</option>
        <option value={ '2' }>Moscow</option>
        <option value={ '3' }>Kiev</option>
    </select>
}





