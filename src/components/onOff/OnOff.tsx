import React, { useState } from 'react';
import s from './OnOff.module.css'

export type OnOffType = {
    status: boolean
    onChange: () => void
}
export const OnOff = ( {status, onChange}: OnOffType ) => {

    return (
        <div>
            <br />
            <div className={ status ? s.buttonMain + ' ' + s.onStyle : s.buttonMain } onClick={ onChange }>On</div>
            <div className={ !status ? s.buttonMain + ' ' + s.offStyle : s.buttonMain } onClick={ onChange }>Off</div>
            <div className={ status ? s.indicatorStyle + ' ' + s.onStyle :  s.indicatorStyle + ' ' + s.offStyle }></div>
        </div>
    );
}