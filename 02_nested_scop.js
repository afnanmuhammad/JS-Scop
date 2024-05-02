// Nested Scop 

function one() {
    let id = 3
    let Usrname = 'Afnan'

    // nested scop
    function two() {            /*The chaild function is used the parant variable*/
        let name = 'Muhammad'
        console.log('The Id is ', id, 'and the name is', Usrname);
    }

    two()
    // console.log(name); it si not scop for this out of the scop

}
//    console.log(Usrname); the will be same condation not scop out of the scop

// one()

// if condation

if (true) {
    let name = 'M.Afnan'
    if (name === 'M.Afnan') {
        let Rollno = "201155"
        console.log(name + " " + Rollno);
    }

    // console.log(Rollno); it is out of the scop the give error

}
// console.log(name);it is out of the scop the give error

// ***************************************************************************
// befor the decleration functiin accusebality 

console.log(beforaccus(3)); /*desnot give error befor the accuse from function*/

function beforaccus(number) {
    return number + 1
}

// **************************************************************************

// function Experation 
// console.log(experation_Funtion(3)); The desnot accuse befor the function in this syntex

let experation_Funtion = function (number1) {
    return number1 + 2

}
console.log(experation_Funtion(23));