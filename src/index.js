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
console.log(`The Level of Our Hero DIO is: ${password}XP`)
console.log()
console.log("And with this Level, Your Sword is of the Class:")
if (password<= 1000){
        console.log("Ferro");
    } else if (password >= 1001 && password <= 2000) {
        console.log("Bronze");
    } else if (password >= 2001 && password <= 5000) {
        console.log("Prata");
    } else if (password >= 5001 && password <= 7000) {
        console.log("Ouro");
    } else if (password >= 7001 && password <= 8000) {
        console.log("Platina");
    } else if (password >= 8001 && password <= 9000) {
        console.log("Ascendente");
    } else if (password >= 9001 && password <= 10000) {
        console.log("Imortal");
    } else if (password >= 10001) {
        console.log("Radiante");
}
console.log()
console.log("Agradeçemos pelos seus Serviços Heroicos. Thank Youuu!!!")
console.log()
console.log("E se você tentasse mais uma vez?")



/*
console.log(diaSem)
console.log(diaHou)
console.log(diaMon)
console.log(diaSec)
*/