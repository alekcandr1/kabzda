import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';
import { AppTitle } from './components/App-title';
import { OnOff } from './components/onOff/OnOff';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [currentRating, setCurrentRating] = useState<RatingType>(0)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const [status, setStatus] = useState<boolean>(true)


    return (
        <div>
            <AppTitle />
            <Accordion title={ 'Menu' } isCollapsed={ isCollapsed } onChange={ () => setIsCollapsed(!isCollapsed) } />
            <Rating currentRating={ currentRating } setCurrentRating={ setCurrentRating } />
            <OnOff status={ status } onChange={ () => setStatus(!status) } />
        </div>
    );
}

export default App;
