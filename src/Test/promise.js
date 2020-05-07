

// const add = (a,b) => {
//     return  new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve (a+b)
//         }, 3000)
//     })
// }


// add(2,3).then((sum) => {
//     console.log(sum)

// add(sum, 5).then((sum2) => {
//     console.log(sum2)
// }).catch((e) => {
//     console.log(e);
// })
// }).catch((e) => {
//     console.log(e);
// })


const add = (a,b) => {
    return  new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve (a+b)
        }, 3000)
    })
}

add(1, 5).then((sum) => {
    console.log(sum)
    return add(sum,2)
}).then((sum2) => {
    console.log(sum2)
})
.catch((e) => {
    console.log(e);
})