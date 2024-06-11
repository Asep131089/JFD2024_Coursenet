//Contoh :
//  var student = {
//     name : "Vincent", // Note Name disebut dengan key / kunci , sedangkan " vincent" disebut Value
//     gpa : 3.21,       // Note gpa disebut dengan key / kunci , sedangkan " 3.21" disebut Value
//     isGraduated : true, // Note isGraduated  disebut dengan key / kunci , sedangkan " true" disebut Value

//  }

//  // akses
// console.log(student.name);
// console.log(student.gpa);
// console.log(student["isGraduated"])


        // CONTOH SOAL ||
// Buatlah sebuah fungsi untuk soal berikut:
// Ubah larik berikut:
// var buah = [“durian”, 75000, true];


// menjadi object:
// {
// jenis : “durian”,
// harga : 75000,
// enak : true
// }

// jawaban dari Object manual tanpa function  by Coach 
// Buatlah sebuah fungsi untuk soal berikut :

// ubah larik berikut :

// var buah = ["durian", 75000, true];

        // JAWABAN \\ 

// var result = {}
// result.jenis=buah[0]
// result.harga=buah[1]
// result.enak=buah[2]
// console.log(result);

// jawaban dari Object manual dengan function  by Coach 

// var buah = ["durian", 75000, true];
// function merubahlarikjadiobject(lariknya) {
//         var result = {}
//         result.jenis = lariknya[0]
//         result.harga =lariknya[1]
//         result.enak = lariknya[2]
//         return result;
// }

// console.log(merubahlarikjadiobject(buah))

// Jawaban dari module

// var buah = ["durian", 75000, true];
// function changeToObject (array){
// var result = {}
// result.jenis = array [0];
// result.harga = array [1];
// result.enak = array[2]
// return result;

// }

// console.log(changeToObject(["Durian",75000,true]));
