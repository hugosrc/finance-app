import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type IncomeAction = ActionType<typeof actions>;

export interface IncomeState {
  readonly incomes: [];
}
