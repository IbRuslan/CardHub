import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { decksSlice } from '@/services/decks/decks.slice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { baseApi } from './base-api'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [decksSlice.name]: decksSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

setupListeners(store.dispatch)
