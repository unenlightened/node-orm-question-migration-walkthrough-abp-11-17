'use strict';

const db = require("../config/db")

class Question{
  static CreateTable() {
    const sql =`
    CREATE TABLE questions (
      id INTEGER PRIMARY KEY,
      content TEXT
    )
    `             //Solution says to put CreateTable within Promise. is there much of a difference?

    return new Promise(function(resolve){
      db.run(sql, function(){
        resolve('boop')
      })
     })
  }
}

module.exports = Question;
