// var scores = [100, 50, 75]
// console.log(scores[2])

// var scores = [100, 50, 75]
// console.log(scores.length)

// ARRAY Berupa STRING 
// var items = ["Laptop", "hp"]
// console.log (items)

// cara menambahkan 1 element ke element utama type String 
// var items = ["Laptop", "hp"]
// items.push("Mouse");
// console.log (items)

//cara menambahkan 1 element ke element utama type String 


// var items = ["Laptop", "hp","Mouse"]
// items.pop("Mouse");
// console.log (items)

// LARIK MULTIDIMENSI

// var scores = [     // catatan larik dengan larik ke 2 harus dipisahkan dengan koma (,) untuk larik terakhir atau ketiga 
//                   // tidak usah dipisahkan ( intinya selain larik terkahir, harus wajib pakai koma )
                  
//   [10, 20, 30],   // [], larik pertama 
//   [15, 25, 35],   // [], larik kedua
//   [1,   3, 5]     // [], larik terakhir
//   ];

// console.log (scores);


// var scores = [
// [10, 20, 30],
// [15, 25, 35],
// [1,   3, 5]

// ];

// console.log (scores[0] [0]);
// console.log (scores[1] [0]);

//Jawaban dari Coach Manual

// var murid = [
// [1, "Vincent", 3.5],
// [2, "Udin", 3.0],
// [3, "Mamang", 2.1]
// ]
// for( var i = 0; i < murid.length; i++){
// if (murid [i][2] >=3){
// console.log(murid[i][0]+"." + murid[i][1]+ " IPK = " +murid[i][2]+ ", LULUS") // Note tanda ( + ) ini untuk menggabungkan string
// }else{
//   console.log(murid[i][0]+"." + murid[i][1]+ " IPK = " +murid[i][2]+ ", GAGAL")
// }
// }

//Jawaban dari Coach SIMPLE ( ERROR )
// var murid = [
//     [1, "Vincent", 3.5 ],
//     [2, "Udin", 3.0],
//     [3, "Mamang", 2.1]
//   ];

// var kelulusan=""

// for( var i = 0; i < murid.length; i++){
// if (murid [i][2] >=3){
//   kelulusan = "LULUS"
// }else{
//   kelulusan = "GAGAL"
// }

//   console.log(murid[i][0]+"." + murid[i][1]+ " IPK = " +murid[i][2]+ "," +kelulusan)
// }



//Jawaban lainnya Coach menggunakan IF TERNARY yang praktis 

// var murid = [
//   [1, "Vincent", 3.5 ],
//   [2, "Udin", 3.0],
//   [3, "Mamang", 2.1]
// ];

// for( var i = 0; i < murid.length; i++){

// console.log(murid[i][0]+". " + murid[i][1]+ " IPK = " +murid[i][2]+ ((murid[i][2]>=3)?" LULUS":" GAGAL"))
// }

// Note console.log diatas ((murid[i][2]>=3)?" LULUS":" GAGAL")) ini adalah contoh if ternary yang fraktis
// tanda kurung (murid[i][2]>=3) ini adalah syarat kondisi di IF 
// tanda kurung ------>((murid[i][2]>=3)?" LULUS":" GAGAL")<------- tanda kurung yang ini adalah syarat yang harus ada untuk IF Tyneri

// Jawaban dari sendiri  

// var murid = [
//     [1, "Vincent", 3.5 ],
//     [2, "Udin", 3.0],
//     [3, "Mamang", 2.1]
//   ];
  
//   for (var i = 0; i < murid.length; i++) {
//     var id = murid[i][0];
//     var nama = murid[i][1];
//     var ipk = murid[i][2];
//     // Periksa apakah murid lulus atau tidak
//     //let status = ipk >= 2.5 ? "Lulus" : "Gagal";
//     if ( ipk >= 3.0){
//         console.log(`${id}. ${nama}, IPK = ${ipk}, "lulus" `);
//     }else{
//         console.log(`${id}. ${nama}, IPK = ${ipk}, "Tidak Lulus" `);
//     } 
//   }


// // jawaban coba coba modifikasi sendiri tapi tulisan lulusnya manual

// var murid = [
//     [1, "Vincent", 3.5 , "Lulus"],
//     [2, "Udin", 3.0, "Lulus"],
//     [3, "Mamang", 2.1, "Tidak Lulus"], 
//   ];
  
//   for (var i = 0; i < murid.length; i++) {
//     var id = murid[i][0];
//     var nama = murid[i][1];
//     var ipk = murid[i][2];
//     var status =murid[i][3]
//     // Periksa apakah murid lulus atau tidak
//     //let status = ipk >= 2.5 ? "Lulus" : "Gagal";
    
//     // Cetak hasil
//     console.log(`${id}. ${nama}, IPK = ${ipk}, ${status}`);
//   }




// jawaban dari youtube

// var murid = [
//     [1, "Vincent", 3.5],
//     [2, "Udin", 3.0],
//     [3, "Mamang", 2.1]
//   ];
  
//   for (let i = 0; i < murid.length; i++) {
//     let id = murid[i][0];
//     let nama = murid[i][1];
//     let ipk = murid[i][2];
  
//     // Periksa apakah murid lulus atau tidak
//     let status = ipk >= 2.5 ? "Lulus" : "Gagal";
  
//     // Cetak hasil
//     console.log(`${id}. ${nama}, IPK = ${ipk}, ${status}`);
//   }


// Contoh array lulus tidak lulus 

// // Contoh array dengan informasi siswa (format: [id, nama, IPK])
// var students = [
//     [1, "Vincent", 3.5],
//     [2, "Udin", 3.0],
//     [3, "Mamang", 2.1],
//     [4, "Siti", 3.8],
//     [5, "Rina", 2.9]
//   ];
  
//   // Iterasi melalui elemen array dengan menggunakan for loop
// //   for (var i = 0; i < students.length; i++) {
// //     // Mendapatkan informasi siswa
// //     var id = students[i][0];
// //     var name = students[i][1];
// //     var gpa = students[i][2];
  
// //     // Memeriksa kondisi dengan if
// //     if (gpa >= 2.5) {
// //       console.log(`${id}. ${name} memiliki IPK ${gpa}, status: Lulus`);
// //     } else {
// //       console.log(`${id}. ${name} memiliki IPK ${gpa}, status: Tidak Lulus`);
// //     }
// //   }
