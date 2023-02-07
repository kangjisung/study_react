import * as Clock from './clock'
import * as Counter from './counter'
import * as R from './remoteUser'
import * as Cards from './cards'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  clock: Clock.reducer,
  counter: Counter.reducer,
  remoteUser: R.reducer,
  cards: Cards.reducer
})
