import React, { useState } from 'react';

export function AccordionBody() {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    return (
        <div>
            <button onClick={ () => setIsCollapsed(!isCollapsed) }>
                { isCollapsed ? 'Развернуть' : 'Свернуть' }
            </button>
            <ul style={ {display: isCollapsed ? 'none' : 'block'} }>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

