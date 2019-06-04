// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
if (err) {
  return console.log('unable to connect to the database');
};
console.log('database connected successfully');

// db.collection('Todos').removeMany({text: "Eat Lunch"}).then((result)=>{
//   console.log(result);
// });
db.collection('Todos').removeOne({text: "walk the dog"}).then((result)=>{
  console.log(result);
});
    //
    // db.close();
});
