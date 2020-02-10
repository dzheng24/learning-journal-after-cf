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