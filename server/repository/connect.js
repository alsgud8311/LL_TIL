const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const sql = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  database: process.env.DB_DBNAME,
  port: 3306,
});

const getConnection = async () => {
  try {
    const connection = await sql.getConnection();
    return connection;
  } catch (error) {
    console.error(`connection Error: ${error.message}`);
    return null;
  }
};

const transaction = async (logic, query) => {
  const connection = await getConnection();
  try {
    await connection.beginTransaction();
    const result = await logic(connection, query);
    await connection.commit();
    return result;
  } catch (error) {
    console.log('error: rollaback');
    await connection.rollback();
    console.error(`db error: ${error}`);
  } finally {
    console.log('release connection');
    connection.release();
  }
};

module.exports = { transaction };
