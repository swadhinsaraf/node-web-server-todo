const {ObjectID} = require('mongodb')
var {mongoose}= require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var{User}= require('./../server/models/user');

Todo.findOneAndRemove({_id:"5cfa57463a452b33382b12ce"}).then((todo)=>{
  console.log(JSON.stringify(todo,undefined,2));
});
