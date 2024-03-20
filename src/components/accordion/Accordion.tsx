import React, { useState } from 'react';
import { AccordionTitle } from './Accordion-title';
import { AccordionBody } from './Accordion-body';
import s from './Accordion.module.css'

type AccordionPropsType = {
    title: string
    isCollapsed: boolean
    onChange: () => void
}

export function Accordion( {title, isCollapsed, onChange}: AccordionPropsType ) {

    return (
        <div className={s.accordion}>
            <AccordionTitle title={ title } setIsCollapsed={ onChange } />
            <AccordionBody isCollapsed={ isCollapsed } />
        </div>
    );
}