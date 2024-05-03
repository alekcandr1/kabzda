import React, { useState } from 'react';

export type ItemType = {
    title: string,
    value: any,

}

type AccordionBodyType = {
    isCollapsed: boolean
    items: Array<ItemType>
    onClick: ( id: string ) => void
}

export function AccordionBody( {isCollapsed, items, onClick}: AccordionBodyType ) {

    return (
        <div>
            <ul>
                { items.map(( item, index ) => <li key={ index }
                                                   onClick={ () => onClick(item.value) }>{ item.title }</li>) }
            </ul>
        </div>
    );
}

