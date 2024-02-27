import React, { useState } from 'react';

type AccordionBodyType = {
    isCollapsed: boolean
}

export function AccordionBody( {isCollapsed}: AccordionBodyType ) {
    return (
        <div>
            <ul style={ {display: isCollapsed ? 'none' : 'block'} }>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

