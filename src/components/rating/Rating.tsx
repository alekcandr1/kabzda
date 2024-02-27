import React, { useState } from 'react';
import { Star } from './Star';
import { RatingType } from '../../App';

export type RatingTypeProps = {
    currentRating: RatingType
    setCurrentRating: (value: RatingType) => void
}

export function Rating( {currentRating, setCurrentRating}: RatingTypeProps ) {

    const onClickHandler = ( currentRating: RatingType ) => {
        setCurrentRating(currentRating)
    }
    const renderRatingStars = () => {
        const allStars = []
        for (let i = 1; i <= 5; i++) {
            allStars.push(<Star key={ i }
                                selected={ currentRating >= i }
                                setValue={ setCurrentRating }
                                value={ i as RatingType }
            />)
        }
        return allStars
    }
    const renderRatingButtons = () => {
        const allButtons = []
        for (let i: RatingType = 0; i <= 5; i++) {
            allButtons.push(<button key={ i } onClick={ () => onClickHandler(i) }>{ i }</button>)
        }
        return allButtons
    }


    return (
        <div>
            { renderRatingStars() }
            <br />
            { renderRatingButtons() }
        </div>
    );
}
