import { action } from 'typesafe-actions'

export function addIncome({ 
  description,
  value, 
  month 
}: {
  description: string,
  value: string,
  month: string
}) {
  return action('@income/ADD_REQUEST', {
    description,
    value,
    month
  })
}