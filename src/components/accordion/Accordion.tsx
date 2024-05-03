import React, { useState } from 'react';
import { AccordionTitle } from './Accordion-title';
import { AccordionBody, ItemType } from './Accordion-body';
import s from './Accordion.module.css'

type AccordionPropsType = {
    title: string
    isCollapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: ( id: string ) => void
}

export function Accordion( {title, isCollapsed, onChange, items, onClick}: AccordionPropsType ) {

    return (
        <div className={ s.accordion }>
            <AccordionTitle title={ title } setIsCollapsed={ onChange } />
            { !isCollapsed && <AccordionBody isCollapsed={ isCollapsed } items={ items } onClick={ onClick } /> }
        </div>
    );
}