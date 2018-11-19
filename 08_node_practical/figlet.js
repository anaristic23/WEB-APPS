const figlet = require('figlet');

// figlet('Frontend bootcamp', function (err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

const figResult = figlet.textSync('Boo!', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
})

module.exports = { figResult };
