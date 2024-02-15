import React from 'react';

type AccordionTitlePropsType = {
    title: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');

    return (
        <h3>{props.title}</h3>
    );
}
