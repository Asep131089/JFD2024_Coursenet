//Contoh Class 

// class Vehicle {
//     constructor(name, type, price) {

//         this.name = name;
//         this.type = type;
//         this.price = price;

//     }

//     starEngine(){
//         console.log(`Nyalakan mesin ${this.name}`); // ini adalah cara penulisan methode dengan class karena berbeda penulisan dengan methode secara object 
//     }
//     StopEngine(){
//         console.log (`Matikan mesin ${this.name}`) ; ini adalah cara penulisan methode dengan class karena berbeda penulisan dengan methode secara object 
//     }                                                // stopengine () {   concologe.log } ======>>ini adalah penulisan methode di class 

// } 
// let kendaraan = new Vehicle("Civic", "Sedan",1000000);  // ======= >>   ini yang disebut Instance 
// console.log(kendaraan)
// console.log(kendaraan.name)
// let kendaraan_2 = new Vehicle("Toyota", "TSUV",100000000);  //  coba coba merubah instansi yang baru  ( kendaraan_2 )
// console.log(kendaraan_2)                            // kendaraan_2 adalah instansi baru  tapi instansi lama bisa dipanggil
// console.log(kendaraan)                                  // jika ingin memanggil instansi lama yang sebelumnya sudah membuat instansi baru
// kendaraan.starEngine()                           // memanggil methode // tidak usah pakai console.log lagi karena di function sudah ada ada 
// kendaraan.StopEngine()                            // memanggil methode // tidak usah pakai console.log lagi karena di function sudah ada ada 
// kendaraan_2.starEngine()                           // memanggil methode // // tidak usah pakai console.log lagi karena di function sudah ada ada 
// kendaraan_2.StopEngine()                          // memanggil methode // // tidak usah pakai console.log lagi karena di function sudah ada ada 


/// CONTOH LATIHAN  CLASS DARI COACH

// class People {     // ingat hurup awal class harus besar ya!
//     constructor(name, age, hobbies) {
//         this.name = name || "empty";
//         this.age = age || 0;
//         this.hobbies = hobbies || [];
        
//     }
//     speakUp() {
//         console.log(`My name is ${this.name} and my age is ${this.age}. `)
//     }

//     mentionHobbies() {
//         console.log("My hobbies : ")
//         this.hobbies.forEach((hoby, index) => {  // hoby ini adalah varibel perulangan, jadi boleh  tidak sama seperti variabel di class People ==>> Hobbies
//             console.log(`${index +1}. ${hoby}`)
//         })
//     }

//     addHobby(hobbyname){
//     this.hobbies.push(hobbyname)
//     console.log (`${hobbyname} is my new hobby!`)    
//     }

//     deleteHobby(){              // pop fungsi untuk Menghapus 
//         this.hobbies.pop()
//     }


// }

// Proses pembuatan instansi 
// const orang = new People ("Vincent", 29, ["coding","design"])  // membuat instansi ke -1 
// orang.mentionHobbies()
// orang.mentionHobbies()
// // // orang adalah Instance of class People / Object Class
// console.log(orang)


// const manusia = new People ("Asep", 35, [])    // mencoba membuat instansi yang ke -2 dengan array kosong / null 
// // console.log(manusia)
// // manusia.speakUp()
// // manusia.mentionHobbies()
// manusia.addHobby("mancing")
// manusia.deleteHobby()    // ini 
// // manusia.mentionHobbies()
// // manusia.mentionHobbies()
// // orang.mentionHobbies()
// console.log(manusia)


//// CONTOH LAIN dari CLASS
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     sayHello() {
//       console.log('Hello!');
//     }
//   }
  
//   const person = new Person('John', 25);
//   console.log(person);

//   person.sayHello()