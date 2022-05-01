import { configureStore } from '@reduxjs/toolkit'
import CartList from './Slices/CartList'
export const store = configureStore({
  reducer: {
      CartList
  },
})