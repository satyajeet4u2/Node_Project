
const add = (a,b) => {
    return  new Promise((resolve,reject) => {
        setTimeout(() => {

            if(a<0 || b<0) {
               return reject("Number Should be gratter than 0")
            }
            resolve (a+b)
        }, 2000)
    })
}


const doWork = async () =>{
const sum = await add(20,30)
const sum2 = await add(sum,30)
// const sum3 = await add(sum2,-30)
return sum2
// return sum3
}


doWork().then((re) => {
    console.log('result', re)
}).catch((err) => {
    console.log(err)
})