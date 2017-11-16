'use strict';

const db = require("../config/db")

class Question{
  static CreateTable() {
  //lab passes with table creation above the return Promise. Solution says to put it within Promise. is there a difference?
    return new Promise(function(resolve){
      const sql =`
      CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )
      `
      db.run(sql, function(){
        resolve('boop')
      })
     })
  }
}

module.exports = Question;
