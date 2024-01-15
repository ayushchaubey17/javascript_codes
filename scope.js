// functional scope

let a = 34;  // global scope

function ky() {
    let a = 23;  // functional scope

    console.log(a)
}


ky();

{
    let b = 60;   // block scope
}
// console.log(b)




