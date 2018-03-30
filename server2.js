//sport news
var http = require('http');


var app = http.createServer(function (req, res) {
  
    res.setHeader('Content-Type', 'application/json');
    res.write("\nSport News 1\n");

    res.write(JSON.stringify({ type:'Sport news', date : '26 March, 18', news :'BUENOS AIRES: Argentina captain Lionel Messi admitted Monday that his generation has a score to settle at the World Cup in Russia after a series of agonising near misses in major tournaments.' } ,null,3) ); //news 1

    res.write("\nSport News 2\n");

    res.write(JSON.stringify({ type:'Sport news', date : '27 March, 18', news :' Olympic and world championship silver medallist PV Sindhu on Tuesday suffered an injury scare but there is no immediate threat to her participation in the Commonwealth Games starting next month. ' } ,null,3) ); //news 2

    res.write("\nSport News 3\n");

    res.write(JSON.stringify({ type:'Sport news', date : '28 March, 18', news :'Steve Smith, David Warner and Cameron Bancroft have been charged with a breach of Article 2.3.5 of the CA Code of Conduct for Ball Tempering' } ,null,3) ); //news 3
});
app.listen(8080); 