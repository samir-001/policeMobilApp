import { configureStore } from '@reduxjs/toolkit'
import expenses from './slices/expenses'
export const store = configureStore({
  reducer: {
    expenses:expenses
  },
})
