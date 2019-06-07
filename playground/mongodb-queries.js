const {ObjectID} = require('mongodb')
var {mongoose}= require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var{User}= require('./../server/models/user');
var id= '5cf616b82e4587fc51ee003e';

// if (!ObjectID.isValid(id)) {
//   console.log('id not valid');
// }
// Todo.find({
//   _id:id
// }).then((todos) =>{
//   console.log('Todos', JSON.stringify(todos,undefined,2));
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) =>{
//   console.log('Todo', JSON.stringify(todo,undefined,2));
// });

// Todo.findById({
//   _id:id
// }).then((todo) =>{
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todos by ID', JSON.stringify(todo,undefined,2));
// }).catch((e)=>{
//   console.log(e);
// });



User.findById({
  _id:id
}).then((user)=>{
  if (!user) {
    return console.log('id not found');
  }
  console.log('User by ID', JSON.stringify(user,undefined,2));
}).catch((e)=>{
  console.log(e);
});
