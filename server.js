/**
 * createServer and listen to it
 * pass router to route
 */

var http = require('http'),
    url = require('url')

exports.start = function(route,handler){
  http.createServer(function(request,response) {
    var path,content
    path = url.parse(request.url).pathname
    console.log("Request for " + path + " received.")
    route(path,handler,response)
  }).listen(8888)

  console.log('server start.')
}
