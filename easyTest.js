/**
 * Created by Administrator on 2016/7/8.
 */
var http=require('http');
http.createServer(function (req,res) {
    console.log("sucess!!!!");
    res.write('hello world');
    res.end();
}).listen(10000);