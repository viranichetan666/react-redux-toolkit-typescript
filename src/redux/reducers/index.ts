import { combineReducers } from '@reduxjs/toolkit'

import demo from './demo';

const rootReducer = combineReducers({
  demo,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer