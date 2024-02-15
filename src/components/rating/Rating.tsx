import React, { useState } from 'react';
import { Star } from './Star';

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

export function Rating() {

    const [currentRating, setCurrentRating] = useState<RatingType>(0)

    const onClickHandler = ( value: RatingType ) => {
        setCurrentRating(value)
    }
    const renderRatingStars = () => {
        const allStars = []
        for (let i: RatingType = 1; i <= 5; i++) {
            allStars.push(<Star key={ i } selected={ currentRating >= i } />)
        }
        return allStars
    }
    const renderRatingButtons = () => {
        const allButtons = []
        for (let i: RatingType = 0; i <= 5; i++) {
            allButtons.push(<button key={ i } onClick={ () => onClickHandler(i) }>{i}</button>)
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
