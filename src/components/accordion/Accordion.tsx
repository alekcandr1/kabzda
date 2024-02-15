import React from 'react';
import { AccordionTitle } from './Accordion-title';
import { AccordionBody } from './Accordion-body';

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