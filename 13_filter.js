// .filter()
// Menghasilkan array baru dari hasil filter

// CONTOH dari COACH 

// const ages  = [ 32, 33, 16, 40];
// const resultnya = ages.filter(broasep)
// function broasep(age){
//         return age >=18
// }

// console.log(resultnya);


// exampel untuk filter ()

// const angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterNumber = angka.filter(element => element % 4 ==0);
// console.log(filterNumber)

// etc
// Untuk selanjutnya dapat di lihat
// taut di bawah


        // LATIHAN DARI COACH 

// Let stats = [95, 80, 90,75,50]
// buat function untuk memproses angka menjadi
// 1. filter nilai yang lebih besar dari 75
//2. mengkalikan angka dengan 5
//3. buat tampilan semua

// let stats = [95,80,90,75,50]
// const resultnya = stats.filter(broasep)
// function broasep(angka){                // variabel angka adalah variabel baru yang ada di function, note : 
//         return angka >75                // boleh berbeda nama variabel di function  ( angka) dengan variabel utama (stats)
// }                                       // nama variabel di function tidak mempengaruhi variabel utama

// const nomorbaru = resultnya.map(kali)  // element element variabel utama di map didapat dari hasil output eksekusi filter yakni  [ 95, 80, 90 ]
// function kali (nomor){                 // nama var "resultnya" ini diambil dari  "resultnya" diatas
//         return nomor *5;
// }
// console.log(resultnya);
// console.log(nomorbaru);

// const number = [4,9,16,25]
// const numberbaru = number.map(perkalian)
// function perkalian (num) {
//         return num *2;

// }
// console.log(numberbaru)