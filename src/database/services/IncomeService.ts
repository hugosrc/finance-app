import * as SQLite from 'expo-sqlite'
import { DatabaseConnection } from '../'
import { Income } from '../models/Income'

export class IncomeService {
  private tableName: string
  private db: SQLite.WebSQLDatabase

  constructor () {
    this.tableName = "incomes"
    this.db = DatabaseConnection.getConnection()
  }

  public async create (income: Income) {
    return new Promise((resolve, reject) => this.db.transaction(trx => {
      trx.executeSql(
        `INSERT INTO ${this.tableName} (description, value, month) VALUES (?, ?, ?);`,
        [income.description, income.value, income.month],
        (_, { insertId }) => {
          resolve(insertId)
        }),
        (sqlError) => {
          reject(sqlError)
        }
    }))
  }

  public async update (income: Income) {
    return new Promise((resolve, reject) => this.db.transaction(trx => {
      trx.executeSql(
        `UPDATE ${this.tableName} SET description = ?, value = ?, month = ? WHERE id = ?;`,
        [income.description, income.value, income.month, income.id],
        (_, { rowsAffected }) => {
          resolve(rowsAffected)
        }),
        (sqlError) => {
          reject(sqlError)
        }
    }))
  }

  public async delete (id: string) {
    return new Promise((resolve, reject) => this.db.transaction(trx => {
      trx.executeSql(
        `DELETE FROM ${this.tableName} WHERE id = ?;`,
        [id],
        (_, { rowsAffected }) => {
          resolve(rowsAffected)
        }),
        (sqlError) => {
          reject(sqlError)
        }
    }))
  }

  public async findByMonth (month: string) {
    return new Promise((resolve, reject) => this.db.transaction(trx => {
      trx.executeSql(
        `SELECT * FROM ${this.tableName} WHERE month = ?;`,
        [month],
        (_, { rows }) => {
          resolve(rows)
        }),
        (sqlError) => {
          reject(sqlError)
        }
    }))
  }
}