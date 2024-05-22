import React from 'react';
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

export const AccordionMemo = ( {title, isCollapsed, onChange, items, onClick}: AccordionPropsType ) => {
    console.log('Render Accordion')
    return (
        <div className={ s.accordion }>
            <AccordionTitle title={ title } setIsCollapsed={ onChange } />
            { !isCollapsed && <AccordionBody isCollapsed={ isCollapsed } items={ items } onClick={ onClick } /> }
        </div>
    );
}

export const Accordion = React.memo(AccordionMemo)