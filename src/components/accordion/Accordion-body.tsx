import React, { useState } from 'react';

type AccordionBodyType = {
    isCollapsed: boolean
}

export function AccordionBody( {isCollapsed}: AccordionBodyType ) {
    return (
        <div>
            <ul style={ {display: isCollapsed ? 'none' : 'block'} }>
                <li>Home</li>
                <li>About us</li>
                <li>Contacts</li>
            </ul>
        </div>
    );
}

