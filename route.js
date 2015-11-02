function route(pathname,handle,response){
  console.log('lead to' + pathname)
  if(typeof handle[pathname] === 'function'){
    return handle[pathname](response)
  }else{
    console.log("No request handler found for " + pathname)
    response.writeHead(404, {"Content-Type": "text/plain"})
    response.write("404 Not found")
    response.end()
  }
}

exports.route = route