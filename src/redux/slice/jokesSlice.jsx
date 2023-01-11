import { createSlice } from '@reduxjs/toolkit'


const JokesSlice = createSlice({
    name: 'jokes',
    initialState: {
        jokes: [],
        joke: 'salm'
    },
    reducers: {
        addJokeToFavorites: (state, action) => {
            state.jokes.push(action.payload)
        },
        changeJokes: (state, action) => {
            state.joke = action.payload
        },
    }
})


export const { addJokeToFavorites, changeJokes } = JokesSlice.actions
export default JokesSlice;
