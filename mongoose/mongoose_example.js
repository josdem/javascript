var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/mongoosedb')

var person = new Schema({
  name: String,
  lastName: String
})

var Person = mongoose.model('Person', person)

var object = {"name":"Jose Luis", "lastName":"De la Cruz"}

Person.create(object, function(err, doc){
  if(err){
    console.log('There is an error', err)
    return
  }

  console.log('Person was created', doc)
})

Person.find({}, function(err, docs){
  if(err){
    console.log('There is an error', err)
    return
  }

  docs.forEach(function(person){
    console.log('person:', person.name)
  })
})
