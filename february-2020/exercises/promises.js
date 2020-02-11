// practicing promise functions 

let p = new Promise((resolve, reject) => {
  let a = 2 + 2;
  if ( a === 3) {
    resolve('success')
  } else {
    reject('failed')
  }
})

p.then((message) => {
  console.log('This is in the THEN ' + message)
}).catch((message) => {
  console.log('This is the CATCH ' + message)
})

const seahawksLose = false;
const marshawnRetires = true;

function practicePromise() {
  return new Promise((resolve, reject) => {
    if (seahawksLose) {
      reject ({
        name: 'seahawks lost to packers',
        message: 'better luck next season'
      })
    } else if (marshawnRetires) {
      reject ({
        name: 'marshawn is going home',
        message: 'come on chris carson'
      })
    } else {
      resolve ('seahawks will be just fine')
    }
  })
}

practicePromise().then((message) => {
  console.log('SUCCESS ' + message)
}).catch((error) => {
  console.log(error.name + ' ' + error.message)
})

// promise.all
const promise1 = Promise.resolve('capitol hill');
const promise2 = 24;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'skateboarding')
})

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values)
})