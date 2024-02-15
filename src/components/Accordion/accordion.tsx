import React from 'react';
import { AccordionTitle } from './accordion-title';
import { AccordionBody } from './accordion-body';

type AccordionPropsType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle title={props.title} />
            <AccordionBody />
        </div>
    );
}