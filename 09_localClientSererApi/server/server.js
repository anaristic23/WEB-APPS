const { createPosts } = require("./modulePost.js")

const http = require('http');
const loremIpsum = require('lorem-ipsum')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    const myPosts = createPosts(10);

    // const createPosts = () => {
    //     const myPosts = []
    //     for (let i = 0; i < 10; i++) {
    //         const title = loremIpsum({
    //             count: 3,
    //             units: "words"
    //         })
    //         const par = loremIpsum({
    //             count: 2,
    //             units: "sentences"
    //         })

    //         myPosts.push({
    //             name: title,
    //             body: par
    //         })
    //     }

    //     return myPosts;
    // }

    res.end(JSON.stringify(myPosts));

});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});