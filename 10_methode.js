//               METHODE / Methode
// Method dalam obyek 🡪 fungsi yang berada dalam object.

// Contoh 
// jawaban dari coach 
// var mobil = {
//         // Key
//         name : "Civic",
//         cc : 5000,
    
//         //method
//         starEngine : function ()  // methodenya adalah starEngine
//         {
//             console.log("Mesin nyala");
//         },
//         stopengine : function ()  // methodenya adalah stopengine
//         {
//             console.log("Mesin mati");
//         }, 
//     }
//     console.log(mobil.name)
//     console.log(mobil.cc)
//     mobil.starEngine()
//     mobil.stopengine()


        //jawabn dari module
// var mobil = {
//     // Key
//     name : "Civic",
//     cc : 5000,

//     //method
//     starEngine : function ()  // methodenya adalah starEngine
//     {
//         console.log("Mesin nyala");
//     }

// }
// mobil.starEngine()

// var mobil = {
//     // Properti
//     name: "Civic",
//     cc: 5000,

//     // Metode
//     startEngine: function() {
//         console.log("Mesin nyala");
//     }
// };

// // Memanggil metode dari objek mobil
// mobil.startEngine(); // Output: Mesin nyala

// Buatlah method dari object berikut untuk menampilkan profil:
// Nama: caca
// Berat: 45 kg
// Tinggi: 155 cm
// Hobi: Nonton, makan
// Template:
// var caca = {
// :
// :
// :
// }
// // Jika memanggil caca.sebutkanHobby();
// // hasilnya:
// Hobby caca:
// 1. Nonton
// 2. Makan

// Jawaban dari Coach secara manual 

// var caca = {
//         nama : "Caca",
//         Berat : "45 kg", 
//         Tinggi : "155cm",
//         hobi : ["nonton", "makan"],

//         sebutkanhobi: function(){
//                 console.log(`Hobby Caca :`)
//                 console.log(`1. ${this.hobi[0]}`);
//                 console.log(`2. ${this.hobi[1]}`);       
//         }

// }

// caca.sebutkanhobi();

// var caca = {
//         nama : "Caca",
//         Berat : "45 kg", 
//         Tinggi : "155cm",
//         hobi : ["nonton", "makan"],

//         sebutkanhobi: function(){
//                 console.log(`Hobby Caca :`)
//                 console.log(`1. ${this.hobi[0]}`);
//                 console.log(`2. ${this.hobi[1]}`);       
//         }

// }


// Jawaban dari Coach secara looping  

// var caca = {
//         nama : "Caca",
//         Berat : "45 kg", 
//         Tinggi : "155cm",
//         hobi : ["nonton", "makan", "minuman + Snack"],

//         sebutkanhobi: function(){               // nama methodenya disini adalah "sebutkanhobi"
//                 console.log(`Hobby Caca :`)    // note indext adalah nama variabel bebas saja bisa di ganti dengan "i" atau lainnya terserah anda 
//                 for ( var index = 0; index <this.hobi.length; index++)
//                 console.log(`${index+1}. ${this.hobi[index]}`)     
//         }

// }
// caca.sebutkanhobi()








// Jawaban dari GPT
// var caca = {
//     nama: "Caca",
//     berat: 45,
//     tinggi: 155,
//     hobi: ["Nonton", "Makan"],
//     sebutkanHobby: function() {
//         console.log("Hobby " + this.nama + ":");
//         this.hobi.forEach(function(hobi, index) {
//             console.log((index + 1) + ". " + hobi);
//         });
//     }
// };

// // Memanggil metode sebutkanHobby dari objek caca
// caca.sebutkanHobby();

// Coba coba
// var caca = {
//         nama: "Caca",
//         berat: 45,
//         tinggi: 155,
//         hobi: ["Nonton", "Makan"],
//         sebutkanHobby: function() {
//             console.log("Hobby " + "caca" + ":");
//             for (var i = 0; i < caca.hobi.length; i++) {
//                 console.log(i + 1 + ". " + caca.hobi[i]);
//             }
//         }
//     };
    
//     // Memanggil metode sebutkanHobby dari objek caca,
//     caca.sebutkanHobby();


//     var mahasiswa = {
//     nama: "John Doe",
//     nim: "123456",
//     nilai: 75,
//     tampilkanInfo: function() {
//         console.log("Nama: " + this.nama);
//         console.log("NIM: " + this.nim);
//         console.log("Nilai: " + this.nilai);
//     },
//     apakahLulus: function() {
//         return this.nilai >= 60 ? "Lulus" : "Tidak Lulus";
//     }
// };

// mahasiswa.tampilkanInfo();
// console.log("Status Kelulusan: " + mahasiswa.apakahLulus());