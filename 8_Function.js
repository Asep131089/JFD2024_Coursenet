// FUNCTION

// Function
// function hello(){
// console.log("Halo, selamat pagi");
// }
// // invoke function
// hello();
// // hasil
// //Halo, selamat pagi

// FUNCTION 

// function checkAngka(number){    // Tanpa 
//   if(number % 2 === 0){
//   console.log("Genap");
//   } else {
//   console.log("Ganjil");
//   }
//   }
//   checkAngka(10);
//   // Ganjil
 

//   function checkAngka(number){    // menggunakan if Tinery
//   if(number % 2 === 0 ){
//   }
//     console.log((number % 2 === 0)?"Genap":"Ganjil");
  
// }

// checkAngka(5);

// Buatlah 2 fungsi yang:
// • Mengubah kalimat menjadi larik;
// • Menghitung jumlah elemen dalam larik.
// Contoh masukan: “Hello selamat
// pagi” akan memberi hasil 3

// Jawaban 

// function splitToArray (str){
//   var tempArray = str.split( " ");
//   return tempArray;
// }

// function jumlahKata (kalimat){
// var result = splitToArray(kalimat);
// var  arrayLength = result.length;
// return arrayLength;
// }
// console.log(jumlahKata ("Hello Selamat Pagi"));

//Contoh lain EROOR

// function splitToArray (str){
//   var tempArray = str.split( " ");
//   return tempArray;
// }

// function jumlahKata (kalimat){
// var asep = "hallo bapak bapak"
// var result = splitToArray(kalimat+" "+asep) 
// var  arrayLength = result.length;
// return arrayLength;
// }
// console.log(jumlahKata ("Hello Selamat Pagi"));


// // Function 

// // contoh lain kalkulator 

// function calculator (x,o, y){  // kita cari cara untuk membuat skema agar bisa X + Y maka kita declarasikan dulu dengan switch case
// var result=""
// switch (o) {
// case "+" :
//   // panggil resturn dari function tambah 
//   result = tambah (x,y)
//   break;

//   case "-" :
//     // panggil resturn dari function kurang 
//     result = kurang (x,y)
//     break; 

//    default:
//     result = " hanya bisa penjumlahan dan pengurangan" 
//     break;
// }

// return result;

// }

// function tambah (x,y){
//   return x+y;
// }
// function kurang (x,y){
//   return x-y;
// }

// var hasil = calculator (5, "-", 4)
// console.log(hasil)

// menjelaskan scrip secara detail dari function  tambah 

// function calculator (x,o, y){  // kita cari cara untuk membuat skema agar bisa X + Y maka kita declarasikan dulu dengan switch case
// var result=""
// switch (o) {
// case "+" :
//   // panggil resturn dari function tambah 
//   result = tambah (x,y)
//   break;

//   case "-" :
//     // panggil resturn dari function kurang 
//     result = kurang (x,y)
//     break; 

//     case "*" :
//     // panggil resturn dari function kurang 
//     result = kali (x,y)
//     break;

//     case "/" :
//       // panggil resturn dari function kurang 
//       result = bagi (x,y)
//       break;

//    default:
//     result = " hanya bisa penjumlahan dan pengurangan" 
//     break;
// }

// return result;

// }

// function tambah (x,y){ // rinciannya seperti ini 
//   var result = x + y;
//   return result; // mempersingkat  tulisan dari "var result = x + y;" jadi bisa di tuliskan return result;
//   return x+y;  // langsung saja karena hasilnya sama dengan result = x + y; atau hasil return result
// }
// function kurang (x,y){
//   return x-y;
//   return result; // mempersingkat  tulisan dari "var result = x + y;" jadi bisa di tuliskan return result;
//   return x-y;   // langsung saja karena hasilnya sama dengan result = x + y; atau return result
// }

// function kali (x,y){
//   return x*y;
//   return result; // mempersingkat  tulisan dari "var result = x + y;" jadi bisa di tuliskan return result;
//   return x*y;   // langsung saja karena hasilnya sama dengan result = x + y; atau return result
// }

// function bagi (x,y){
//   return x/y;
//   return result; // mempersingkat  tulisan dari "var result = x + y;" jadi bisa di tuliskan return result;
//   return x/y;   // langsung saja karena hasilnya sama dengan result = x + y; atau return result
// }

// var hasil = calculator (6, "/", 2)
// console.log(hasil)