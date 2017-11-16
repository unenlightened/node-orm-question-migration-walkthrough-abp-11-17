'use strict';

const db = require("../config/db")

class Question{
    return new Promise(function(resolve){
      static CreateTable() {
        const sql =`
        CREATE TABLE questions (
          id INTEGER PRIMARY KEY,
          content TEXT
        )
        `

      db.run(sql, function(){
        resolve('Database is created.')
      })
     })
  }
}

module.exports = Question;
