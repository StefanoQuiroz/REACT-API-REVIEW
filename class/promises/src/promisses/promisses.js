/* const doSomething = () => { console.log("Bucle")}
const doSomethingMyArray = (val) => {
    console.log(val)
}
const myArray = doSomething();
doSomethingMyArray(myArray);
console.log("This message will wait until the above lines complete") */

const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() === 1){
        resolve("good, it´s not Monday!")
    } else {
        reject("Someone has a case of the Mondays!!");
    }
})

noMondays
    .then(res => console.log(res))
    .catch(err => console.error(err));