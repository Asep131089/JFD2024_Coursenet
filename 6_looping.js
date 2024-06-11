 // PERULANGAN FOR & WHILE \\

// for ( var i = 0; i<10; i++){   // MUNCUL KAN 0 S/D 10 TAPI TETAP VAR. 0
//     console.log(i++;
// }


// var i = 1;
// while (i<=10){
//     console.log(i)           // MUNCUL KAN 0 S/D 10 TAPI TETAP VAR. 0
// i++;

// }

// for ( var i = 0; i<10; i++){  // MUNCUL KAN 1 S/D 10 TAPI TETAP VAR. 0
    //     console.log(i+1);
    // }
//     var i = 0;                  //MUNCUL KAN 1 S/D 10 TAPI TETAP VAR. 0
// while (i<10){
//     console.log(i+1)
// i++;
// }



// for ( var i = 0; i<10; i++){   
//     console.log(`ini looping utama i = ${i}`);
//     for ( var k = 0; k<4; k++){   
//         console.log(`ini looping bersarang k = ${k}`)

// }
// }  


// for ( var i = 0; i<10; i++){   
//     console.log(`ini looping utama i = ${i}`);
//     for ( var k = 0; k<i; k++){   
//         console.log(`ini looping bersarang k = ${k}`)

// }
// }  


// for ( var i = 1; i<=5; i++){   
//     console.log(i);
//     for ( var k = 0; k<i; k++){   
//         console.log(`${i}, ${k}`)

// }
// }  

        // Cara Membuat angka susunan Segitiga

// Mencetak    1
            // 1 2
            // 1 2 3
            // 1 2 3 4
            // 1 2 3 4 5

            // var n = ""                           
            // for ( var i = 0; i<5; i++){
            //     for ( var k = 0; k<i+1; k++){   
            //     n=n+String (k+1);
            //     }
            //         console.log(n)
            // n=""                 // ini n bersarang yang di clearkan 
                
            
            // }  
            
            // CARA MEMBUAT ALFHABET SUSUNAN SEGITIGA
            // A
            // A B
            // A B C
            // A B C D
            // A B C D E
            
            // CARA KE-1 DARI COACH
            // var n = ""                           
            // for ( var i = 0; i<5; i++){
            //     for ( var k = 0; k<i+1; k++){   
            //     n=n+String.fromCharCode (65+ k);
            //     }
            //         console.log(n)
            // n=""                 // ini n bersarang yang di clearkan 
                
            
            // }  
            
            
            // cara ke -2 dari you tube
            // function generatePattern(rows) {
            //     for (let i = 0; i < rows; i++) {
            //       let line = '';
            //       for (let j = 0; j <= i; j++) {
            //         line += String.fromCharCode(65 + j) + ' ';
            //       }
            //       console.log(line.trim());
            //     }
            //   }
              
            //   // Example: Generate pattern with 5 rows
            //   generatePattern(5);
            // function generatePattern(rows) {
            //     for (let i = rows; i >= 1; i--) {
            //       let line = '';
            //       for (let j = 1; j <= i; j++) {
            //         line += j + ' ';
            //       }
            //       console.log(line.trim());
            //     }
            //   }
              
            // Mencetak    1 2 3 4 5
                        // 1 2 3 4 
                        // 1 2 3
                        // 1 2 
                        // 1 
            
            // var n = ""                           
            // for ( var i = 0; i<5; i++){
            //     for ( var k = 0; k<5-i; k++){   
            //     n=n+String (k+1);
            //     }
            
            //         console.log(n)
            //         n =""
            //                // ini n bersarang yang di clearkan 
                
            
            // }  