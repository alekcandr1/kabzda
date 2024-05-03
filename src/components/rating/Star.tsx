import React from 'react';

type ValueStarType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    setValue: ( value: ValueStarType ) => void
    value: ValueStarType
}

export function Star( props: StarPropsType ) {
    // console.log('Star rendering');

    // debugger;
    return (
        // props.selected ? <span><b>Star</b> </span> : <span>Star </span>
        <span onClick={ () => props.setValue(props.value) }>{ props.selected ? <b>Star </b> : 'Star ' }</span>
    );

}