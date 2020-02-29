const http = require('http')
const options = {
    'GET':{
        '/': function(res) {
            res.writeHead(200,'{text/plain}')
            res.write('Oi')
        },
        '/oi': function(res) {
            res.writeHead(200,'{text/plain}')
            res.write('tchau')
        }
    },
    'POST':{},
    'PUT':{},
    'DELETE':{}
}
var server = http.createServer((req,res)=>{
    try {

    if(options[req.method][req.url]){
        options[req.method][req.url](res)
    }
    res.end()
            
    } catch (error) {
            
    }
});


server.listen(3000)