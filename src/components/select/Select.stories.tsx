import { action } from '@storybook/addon-actions'
import { Select } from './Select';
import { useState } from 'react';

const Items = [
    {
        title: 'Alex',
        value: '1',
    },
    {
        title: 'Bob',
        value: '2',
    },
    {
        title: 'Anna',
        value: '3',
    }
]

export default {
    title: 'Styled Select',
    component: Select,
}

export const ModeAccordion = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [currentValue, setCurrentValue] = useState('1')

    const clickedItem = ( id: string ) => {
        action('id ' + id)()
        setCurrentValue(id)
        onClickIsOpened()
    }
    const onClickIsOpened = () => {
        setIsOpened(!isOpened)
    }

    return <Select items={ Items } onClickItem={clickedItem} currentItem={currentValue} isOpened={isOpened} onClickIsOpened={onClickIsOpened} />
}