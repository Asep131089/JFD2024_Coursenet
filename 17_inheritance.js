
// Membuat inheritance atau class Turunan 
            // CLASS INDUK 
            class Person {                          // ingat membuat variabel class awal hurup harus huruf kapital
                constructor(id,name,job,city){
                    this.id = id;
                    this.name = name;
                    this.job = job;
                    this.city = city;
                }
            }
            
                  // CLASS TURUNAN / CLASS ANAK KE-1 
            class Programmer extends Person{        // ingat membuat variabel class awal hurup harus huruf kapital
                constructor(id,name,job,city){
                        super(id,name,job,city)
            }
            }
            
            // CLASS TURUNAN / CLASS ANAK KE-2
            class Designer extends Person {         // ingat membuat variabel class awal hurup harus huruf kapital
                constructor(id,name,job,city){
                    super(id,name,job,city)
                }
            }
            
            
            // membuat CLASS TURUNAN / CLASS ANAK yang baru 
            class Office{
                constructor(division){
                this.division = division || [];
            }
            
            showsemuapegawai(){
                console.log(this.division)
            }
            
            addpegawai(name,job,city){
            let id;
            if (this.division.length===0){
                id=1;
            }else{
                id=this.division[this.division.length -1].id+1;
            }
            switch (job) {                                   // variabel job di switchcase ini dari variabel job di addpegawai
                case "programmer":
                     //masukan ke class programmer
                     this.division.push(new Programmer (id,name,job,city))
                    console.log(" divisi Programmer Bertambah")
                    break;
                case "designer":
                    this.division.push(new Designer (id,name,job,city))
                    console.log(" divisi designer Bertambah")
                    break;
                default:
                    // tidak ada classnya
                    console.log ( "tidak ada classnya" )
                    break;
            }
            
            }
            
            updatepegawai(id,name,job,city){
                this.division= this.division.map((divisi)=>{
                    if(divisi.id===id){
                        divisi.name = name;
                        divisi.job = job;
                        divisi.city = city;
                        console.log(divisi)
                    }
                    return divisi;
                })
                console.log(`employe dengan ${id} sudah di update`)
            }
            
            deletepegawai(id){
            this.division=this.division.filter((division)=>division.id !== id);
            console.log(`employe dengan id ${id} deleted`)
                
            }
            
            }
            
            let kantor = new Office()
            // kantor.showsemuapegawai()
            kantor.addpegawai("raysa","designer","balikpapan")
            // kantor.showsemuapegawai()
            kantor.addpegawai("nana","designer","balikpapan")
            kantor.showsemuapegawai()
            // kantor.updatepegawai (1,"raysa","programmer","balikpapan")
            kantor.showsemuapegawai()
            kantor.deletepegawai(2)
            kantor.showsemuapegawai()
            kantor.addpegawai("nana","designer","balikpapan")
            kantor.showsemuapegawai()
            kantor.addpegawai("dani","designer","balikpapan")
            kantor.showsemuapegawai()
            kantor.deletepegawai(2)
            kantor.showsemuapegawai()
            kantor.addpegawai("nanyunia","designer","balikpapan")
            kantor.showsemuapegawai()
            
            
            