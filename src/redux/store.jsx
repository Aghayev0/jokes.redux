import {  configureStore } from '@reduxjs/toolkit'
import JokesSlice from './slice/jokesSlice'


export const store = configureStore({
  reducer: JokesSlice.reducer
})