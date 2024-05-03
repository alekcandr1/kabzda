import { RatingType } from './App';
import { Simulate } from 'react-dom/test-utils';

export type ActionType = {
    type: string
    payload?: any
}

export type StateType = {
    isCollapsed: boolean
    currentRating: RatingType
    status: boolean
}


export const reducer = ( state: StateType, action: ActionType ) => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {
                ...state,
                isCollapsed: !state.isCollapsed
            }
        case 'SET-RATING':
            return {
                ...state,
                currentRating: action.payload
            }
        case 'TOGGLE-STATUS':
            return {
                ...state,
                status: !state.status
            }
        default:
            throw new Error('Bad action type')
    }
}
