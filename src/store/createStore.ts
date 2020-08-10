import { createStore, applyMiddleware, Reducer, Middleware } from "redux"
import { IncomeState, IncomeAction } from "./modules/income/types"

export interface StoreState {
  income: IncomeState
}

export type StoreAction = IncomeAction

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}