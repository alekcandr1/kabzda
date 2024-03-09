import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { useState } from 'react';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Accordion stories',
    component: Accordion,
}

export const CollapsedAccordion = () => {
    return <Accordion
        title={ 'Collapsed accordion' }
        isCollapsed={ true }
        onChange={ action('clicked') }
    />
}
export const OpenedAccordion = () => {
    return <Accordion
        title={ 'Opened accordion' }
        isCollapsed={ false }
        onChange={ action('clicked') }
    />
}
export const StateAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        title={ 'State accordion' }
        isCollapsed={ collapsed }
        onChange={ () => setCollapsed(!collapsed) }
    />
}