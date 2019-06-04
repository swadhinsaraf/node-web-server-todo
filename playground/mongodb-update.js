// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
if (err) {
  return console.log('unable to connect to the database');
};
console.log('database connected successfully');

db.collection('Users').findOneAndUpdate({
  _id : new ObjectID('5cee75ea5d629f43e805a235')
},{
  $set:{
    name:"Sara"
  },
    $inc:{
      age:1
    }
  }, {returnOriginal:false
}).then((result)=> {
  console.log(result);
});

    //
    // db.close();
});
