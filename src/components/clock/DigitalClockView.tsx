import * as React from 'react';
import { addZeroToString, ClockViewType } from './Clock';

export const DigitalClockView: React.FC<ClockViewType> = ( {date} ) => {
    return <>
        <span>{ addZeroToString(date.getHours()) }</span>
        :
        <span>{ addZeroToString(date.getMinutes()) }</span>
        :
        <span>{ addZeroToString(date.getSeconds()) }</span>
    </>
}