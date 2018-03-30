var http = require('http');
var request = require("request") ;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
 
  //fetch it , means user is asking both news and has send an url request to the Server 1
  
  //create the base address
  var sport_server = 'http://127.0.0.1:8080';
//now the server1 will call server2 for spot news
    res.write('Result') ;
   
    request(sport_server, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        res.write(body);
        
      });


  //and call server3 for fashion news
  var fashion_server = 'http://127.0.0.1:8888' ;
  request(fashion_server, { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    res.write(body);
    
  });
  



//  res.end(txt);
}).listen(8088);
