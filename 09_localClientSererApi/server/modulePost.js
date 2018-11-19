const loremIpsum = require('lorem-ipsum');

const createPosts = () => {
    const myPosts = []
    for (let i = 0; i < 10; i++) {
        const title = loremIpsum({
            count: 3,
            units: "words"
        })
        const par = loremIpsum({
            count: 2,
            units: "sentences"
        })

        myPosts.push({
            name: title,
            body: par
        })
    }

    return myPosts;
}

module.exports = { createPosts }