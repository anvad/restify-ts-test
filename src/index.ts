import { createServer, RequestHandler } from 'restify';

const sayHello: RequestHandler = (req, res, next) => {
    console.log(`req headers= ${JSON.stringify(req.headers, null, 2)}`);
    console.log(`req httpVersion= ${req.httpVersion}`);
    console.log(`req.contentLength= ${req.contentLength()}`);
    console.log(`req.contentType()= ${req.contentType()}`);
    res.end('hello there!', 'utf-8');
};

process.env.PORT = '8008';
const server = createServer();
server.get('/api/sayhello', sayHello);

server.listen(process.env.PORT || 8008, () => {
    console.log('%s listening to %s', server.name, server.url);
});