//Define the randon function tails or heads
const tossCoin = () => ((Math.random() > 0.5) ? "heads" : "tails")
//Heads 5x continuosly
const fiveheadsSync = () => {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts ++;
        let random = tossCoin();
        //console.log(`${random} was flipped`);
        if(random === "heads"){
            headsCount ++;
        }else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heades"`;
}
console.log("Sync-ronous Function")
console.log(fiveheadsSync());
console.log({Mensaje_1_despues:"This is run he fiveHeadsSync function Completes"});
console.log("Async-ronous Function")

const fiveHeadsAsync = () => {
    return new Promise ((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts ++;
            let random = tossCoin();
            //console.log(`${random} was flipped`);
            if(random === "heads"){
                headsCount ++;
            }else {
                headsCount = 0;
            }
        }
        if(attempts < 100){
            resolve({
                Intentos: attempts,
                Mensaje: `${attempts} veces`
            })
        } else {
            reject({
                Intentos: attempts,
                Mensaje: `Supero las 100 veces`
            })
        }
        //return `It took ${attempts} tries to flip five "heades"`;
    })
}

fiveHeadsAsync()
    .then(res => console.log("Resultado =>", res))
    .catch(err => console.log("Error =>", err));
console.log({Mensaje_2_antes:"When does this run now"});
