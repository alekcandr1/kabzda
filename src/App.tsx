import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';
import { AppTitle } from './components/App-title';
import OnOff from './components/onOff/OnOff';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [currentRating, setCurrentRating] = useState<RatingType>(0)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)


    return (
        <div>
            <AppTitle />

            <Accordion title={ 'Title menu' } isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>

            <Rating currentRating={ currentRating } setCurrentRating={setCurrentRating} />
            {/*<OnOff/>*/ }

        </div>
    );
}

export default App;
