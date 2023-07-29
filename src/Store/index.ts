import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { FavPostReducer } from './FavPosts/Reducer'

const rootReducer = combineReducers({
    favPosts: FavPostReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch