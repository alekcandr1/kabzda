import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { useState } from 'react';
import { action } from '@storybook/addon-actions'

const AccordionItems = [
    {
        title: 'Home',
        value: '1',
    },
    {
        title: 'Services',
        value: '2',
    },
    {
        title: 'Contacts',
        value: '3',
    }
]


export default {
    title: 'Accordion stories',
    component: Accordion,
}

export const CollapsedAccordion = () => {
    return <Accordion
        title={ 'Collapsed accordion' }
        items={ AccordionItems }
        isCollapsed={ true }
        onChange={ action('clicked') }
        onClick={ () => {
        } }
    />
}
export const OpenedAccordion = () => {
    return <Accordion
        title={ 'Opened accordion' }
        items={ AccordionItems }
        isCollapsed={ false }
        onChange={ action('clicked') }
        onClick={()=>{}}
    />
}
export const StateAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onClickHandler = ( id: string ) => {
        return action('item ' + id + ' was clicked')()
    }

    return <Accordion
        items={ AccordionItems }
        title={ 'State accordion' }
        isCollapsed={ collapsed }
        onChange={ () => setCollapsed(!collapsed) }
        onClick={ onClickHandler }

    />
}

