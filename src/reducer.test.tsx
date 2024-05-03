import { reducer, StateType } from './reducer';

test('isCollapsed should be true', () => {
    //data
    const state: StateType = {
        currentRating: 0,
        isCollapsed: false,
        status: true
    }
    //action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    //result
    expect(newState.isCollapsed).toBe(true)
})

test('isCollapsed should be false', () => {
    //data
    const state: StateType = {
        isCollapsed: true,
        currentRating: 0,
        status: true
    }
    //action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    //result
    expect(newState.isCollapsed).toBe(false)
})

test('fake', () => {
    //data
    const state: StateType = {
        isCollapsed: true,
        currentRating: 0,
        status: true
    }
    //action

    //result
    expect(() => {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError()
})