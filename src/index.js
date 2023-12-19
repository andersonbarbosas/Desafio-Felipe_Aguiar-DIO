console.log("This is the Chalanger Of Hero - DIO")

console.log("Our Hero, currently is on the **Fase 4** the he journey")
console.log("Let's check your rating together?")


let hou = new Date()
let sem = new Date()
let mon = new Date()
let sec = new Date()
diaSem = sem.getDay() + 1
diaHou = hou.getHours() + 1
diaSec = sec.getSeconds() + 1
diaMon = mon.getMonth() + 1

console.log()
let password = (diaSec * diaMon + diaHou + diaSem * (diaSec * diaSec))
console.log(`The Level of Our Hero DIO is: ${password}xp`)
console.log()
console.log("And with this Level, Your Sword is of the Class:")
if (password<= 1000){
        console.log("Iron");
    } else if (password >= 1001 && password <= 2000) {
        console.log("Copper");
    } else if (password >= 2001 && password <= 5000) {
        console.log("Silver");
    } else if (password >= 5001 && password <= 7000) {
        console.log("Gold");
    } else if (password >= 7001 && password <= 8000) {
        console.log("Platinum");
    } else if (password >= 8001 && password <= 9000) {
        console.log("Ascending");
    } else if (password >= 9001 && password <= 10000) {
        console.log("Immortal");
    } else if (password >= 10001) {
        console.log("Radiant");
}
console.log()
console.log("Let us thank you for your Heroic Services. Thank Youu!")
console.log()
console.log("And if you try again?")

