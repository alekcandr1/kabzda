import React, { useState } from 'react';
import { AccordionTitle } from './Accordion-title';
import { AccordionBody } from './Accordion-body';

type AccordionPropsType = {
    title: string
    isCollapsed: boolean
    setIsCollapsed: (isCollapsed: boolean) => void
}

export function Accordion( {title, isCollapsed, setIsCollapsed}: AccordionPropsType) {

    const setIsCollapsedHandler = () => {
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div>
            <AccordionTitle title={title} setIsCollapsed={setIsCollapsedHandler} />
            <AccordionBody isCollapsed={isCollapsed} />
        </div>
    );
}