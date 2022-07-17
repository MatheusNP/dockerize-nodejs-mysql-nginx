async function connect(){
  if(global.connection && global.connection.state !== 'disconnected')
      return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
  });
  global.connection = connection;
  return connection;
}

async function listPeople() {
  const conn = await connect();
  const [rows] = await conn.query('SELECT id, name FROM people;');
  return rows;
}

async function insertPeople(people){
    const conn = await connect();
    const sql = 'INSERT INTO people (name) VALUES (?);';
    return await conn.query(sql, [people.name]);
}

module.exports = {listPeople, insertPeople}