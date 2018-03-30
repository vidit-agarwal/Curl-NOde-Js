
//fashion news
var http = require('http');


var app = http.createServer(function (req, res) {
  
    res.setHeader('Content-Type', 'application/json');
    res.write("\nFashion News 1\n");

    res.write(JSON.stringify({ type:'fashion news', date : '26 March, 18', news :'Chanel launches first swim and snow collections' } ,null,3) ); //news 1

    res.write("\nFashion News 2\n");

    res.write(JSON.stringify({ type:'fashion news', date : '27 March, 18', news :'Christy Turlington Burns Unpacks H&M"s Conscious Exclusive 2018 Collection ' } ,null,3) ); //news 2

    res.write("\nFashion News 3\n");

    res.write(JSON.stringify({ type:'fashion news', date : '28 March, 18', news :'Louis Vuitton’s Factory Expansion Will Cut Handbag Production Time Down To One Week' } ,null,3) ); //news 3
});
app.listen(8888); 
