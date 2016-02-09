var express = require('express')
var swig = require('swig')

var application = express()

application.engine('html', swig.renderFile)
application.set('view engine', 'html')
application.set('views', __dirname + '/views')

application.set('view cache', false)
swig.setDefaults({cache:false})

application.get("/",function(request, response){
  response.render("index", {
    title: "Templating",
    person: {"name":"josdem"}
  })
})

application.listen(3000, function(){
  console.log('Server ready and listening at: 3000')
})
