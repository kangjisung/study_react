import type {Action} from 'redux'

export type SetTodayAciton = Action<'setToday'> & {
  today: Date
}

export type Actions = SetTodayAciton
