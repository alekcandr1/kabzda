import React from 'react';

type AccordionTitlePropsType = {
    title: string
    setIsCollapsed: () => void
}

export function AccordionTitle( props: AccordionTitlePropsType ) {
    console.log('AccordionTitle rendering');

    return (
        <h3 onClick={ (e) => props.setIsCollapsed() }>{ props.title }</h3>
    );
}
