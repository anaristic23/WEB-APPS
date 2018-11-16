// const samplePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Stigao sam na red u: ", new Date());
//         resolve(new Date());
//     }, 3000);
// });
// // console.log(samplePromise);
// samplePromise
//     .then((currentTime) => {
//         console.log(currentTime);
//     });

//1.
const promiseArray = [];

for (let i = 0; i < 99; i++) {
    const promiseId = i;
    const newPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(promiseId);
        }, Math.random() * 500);
    });

    promiseArray.push(newPromise);
    // newPromise.then(promiseId => {
    //     console.log(promiseId);
    // });
}

Promise.all(promiseArray)
    .then((promiseArray) => {
        console.log(promiseArray);
    })
