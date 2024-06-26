// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { AnalogClockView } from './AnalogClockView';
import { DigitalClockView } from './DigitalClockView';

type ClockProps = {
    mode: string
}

export const addZeroToString = ( num: number ) => {
    return num < 10 ? '0' + num : num
}

export const Clock = ( {mode}: ClockProps ) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    let view

    switch (mode) {
        case 'analog':
            view = <AnalogClockView date={ date } />
            break
        case 'digital':
        default:
            view = <DigitalClockView date={ date } />
    }

    return <div>
        { view }
    </div>
}
export type ClockViewType = {
    date: Date
}
