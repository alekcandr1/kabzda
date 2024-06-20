import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import { useState } from 'react';
import { RatingType } from '../../App';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Rating stories',
    component: Rating,

} satisfies Meta<typeof Rating>;

export default meta;


type Story = StoryObj<typeof meta>;

export const EmptyRating = () => <Rating currentRating={ 0 } setCurrentRating={ () => {
} } />
export const Rating1 = () => <Rating currentRating={ 1 } setCurrentRating={ () => {
} } />
export const Rating2 = () => <Rating currentRating={ 2 } setCurrentRating={ () => {
} } />
export const Rating3 = () => <Rating currentRating={ 3 } setCurrentRating={ () => {
} } />
export const Rating4 = () => <Rating currentRating={ 4 } setCurrentRating={ () => {
} } />
export const Rating5 = () => <Rating currentRating={ 5 } setCurrentRating={ () => {
} } />
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingType>(0)
    return <Rating currentRating={ rating } setCurrentRating={ setRating } />
}
