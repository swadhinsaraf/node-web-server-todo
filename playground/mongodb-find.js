// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
if (err) {
  return console.log('unable to connect to the database');
};
console.log('database connected successfully');

 // db.collection('Todos').find().count().then((count) =>{
 //   console.log(`Todos count:${count} `);},
 // (err)=> {
 //  console.log("unable to fetch database", err);
 //   });

db.collection('Users').find({name:"swadhin"}).toArray().then((name) =>{
  console.log('Users');
  console.log(JSON.stringify(name,undefined,2));},
  (err) =>{
    console.log('unable to fetch data', err);
  }
);
    //
    // db.close();
});
