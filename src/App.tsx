import React, { useReducer, useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';
import { AppTitle } from './components/App-title';
import { OnOff } from './components/onOff/OnOff';
import { reducer, StateType } from './reducer';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5


function App() {


    const [state, dispatch] = useReducer(reducer, {
        isCollapsed: false,
        currentRating: 0,
        status: true
    })

    const AccordionItems = [
        {
            title: 'Home',
            value: '1',
        },
        {
            title: 'Services',
            value: '2',
        },
        {
            title: 'Contacts',
            value: '3',
        }
    ]

    return (
        <div>
            <AppTitle />
            <Accordion title={ 'Menu ∨' }
                       isCollapsed={ state.isCollapsed }
                       onChange={ () => dispatch({type: 'TOGGLE-COLLAPSED'}) }
                       items={ AccordionItems } onClick={ () => {
            } }
            />
            <Rating currentRating={ state.currentRating }
                    setCurrentRating={ (e) => dispatch({type: 'SET-RATING', payload: e}) }
            />
            <OnOff status={ state.status }
                   onChange={ () => dispatch({type: 'TOGGLE-STATUS'}) }
            />
        </div>
    );
}

export default App;