const task1 = () => {
    return new Promise((resolve, reject) => {
        resolve('task 1 is complete')
     });
}

const task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('task 2 is complete')
        }, 2000)
    
    });
}
function task3() {
    return new Promise((resolve, reject) => {
        resolve('task 3 is complete')
     });
}


async function run() {
   const t1 = await task1();
   console.log(t1);
   const t2 = await task2();
   console.log(t2);
   const t3 = await task3();
   console.log(t3);
}

run();
