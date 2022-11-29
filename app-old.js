const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // res.write('id', 'nombre');
    // res.write('1', 'Jesus');
    // res.write('2', 'Biviana');
    // res.write('3', 'Samuel');
    // res.write('4', 'Rebeca');
    // res.write('5', 'Javier');

    res.write('Hola Mundo');
    res.end();
})
    .listen(8080);

console.log('escuchando el puerto 8080');