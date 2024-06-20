// @flow 
import { Clock } from './Clock';

export default {
    title: 'Clock stories',
    parameters: {
        layout: 'centered',
    }
}

export const AnalogClock = () => <Clock mode={'analog'} />;
export const DigitalClock = () => <Clock mode={'digital'} />;
