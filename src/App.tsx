import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';
import { AppTitle } from './components/App-title';
import OnOff from './components/onOff/OnOff';

// function declaration
function App() {
    console.log('App rendering');
    return (
        <div>
            <AppTitle />

            <Accordion title={ 'Title menu' }/>

            {/*<Rating />*/}
            {/*<OnOff/>*/ }

        </div>
    );
}

export default App;
