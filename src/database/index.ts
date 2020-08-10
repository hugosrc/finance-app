import * as SQLite from 'expo-sqlite';

export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase('database.db'),
};

export class DatabaseInit {
  private db: SQLite.WebSQLDatabase;

  constructor() {
    this.db = DatabaseConnection.getConnection();

    this.execute();
  }

  private execute() {
    const sql = [
      `CREATE TABLE IF NOT EXISTS incomes (
        id varchar(255) NOT NULL,
        description varchar(255) NOT NULL,
        value decimal(18,2) NOT NULL,
        month varchar(255) NOT NULL,
        created_at timestamp  NOT NULL  DEFAULT current_timestamp,
        updated_at timestamp  NOT NULL  DEFAULT current_timestamp,
        PRIMARY KEY (id)
      );`,
    ];

    this.db.transaction(
      (trx) => {
        for (let i = 0; i < sql.length; i++) {
          trx.executeSql(sql[i]);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
