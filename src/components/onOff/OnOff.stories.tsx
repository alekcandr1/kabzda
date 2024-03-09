import type { Meta, StoryObj } from '@storybook/react';
import { OnOff, OnOffType } from './OnOff'
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'OnOff stories',
    component: OnOff,
}

const callback = action('on or off clicked')
export const OnMode = () => <OnOff onChange={ callback } status={ true } />
export const OffMode = () => <OnOff onChange={ callback } status={ false } />
export const ChangeMode = () => {
    const [status, setStatus] = useState<boolean>(false)
    return <OnOff onChange={ () => setStatus(!status) } status={ status } />
}