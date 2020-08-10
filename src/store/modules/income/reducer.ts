import { IncomeState, IncomeAction } from "./types"

const initialState: IncomeState = {
  incomes: []
}

export default function income(
  state = initialState, 
  action: IncomeAction
): IncomeState {
  switch (action.type) {
    case '@income/ADD_REQUEST':
      return state
  
    default:
      return state
  }
}