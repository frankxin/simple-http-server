var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.")

  //async behavior
  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write(stdout)
    response.end()
  });
  
  /**
   *
   * delay behavior
   * function sleep(milliSeconds) {
   * var startTime = new Date().getTime();
   * while (new Date().getTime() < startTime + milliSeconds);
   * }
   * sleep(10000);
   * response.writeHead(200,{"Content-Type": "text/plain"})
   * response.write("this is delay start")
   * response.end()
   * 
   */
  
  
}
function upload(response){
  response.writeHead(200, {'Content-Type': 'text/plain' })
  response.write("this is upload")
  response.end()
}
exports.start = start
exports.upload = upload