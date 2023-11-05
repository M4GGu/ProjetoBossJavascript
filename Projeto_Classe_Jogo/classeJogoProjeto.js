class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
       
        
    }

    attack(){
        let attackType;

        if(this.type == "Mage"){
            attackType = "magic"
            console.log(`${this.type} attacked using ${attackType}`)
        }else if(this.type == "Warrior"){
            attackType = "sword"
            console.log(`${this.type} attacked using ${attackType}`)
            
        }else if(this.type == "Monk"){
            attackType = "martial arts"
            console.log(`${this.type} attacked using ${attackType}`)
            
        }else if(this.type == "Ninja"){
            attackType = "shuriken"
            console.log(`${this.type} attacked using ${attackType}`)
            
        }else{
            console.log("Something is Wrong");
        }
            
        }
        
    }




 let hero1 = new hero("Gandalf",109,"Mage");
 let hero2 = new hero("Darius",109,"Warrior");
 let hero3 = new hero("Shaco",109,"Ninja");
 let hero4 = new hero("Lee",109,"Monk");

 hero1.attack();
 hero2.attack();
 hero3.attack();
 hero4.attack();









// let invoice = {
//     name:"felipe",
//     age: 28,
//     products: {
//         0:["Mouse 2xwm",20.90],
//         1:["Teclado Mecanico",129.90],
//         2:["Monitor",899.90]

//     }
      
// }

// generateInvoice(invoice); 

// function generateInvoice(invoice){
//     console.log(`O comprador é ${invoice.name}`);
//     console.log(`Idade: ${invoice.age}`);

//     for(let index in invoice.products){
//         let [productName,productPrice] = invoice.products[index];
//         console.log(`- ${productName}: R$ ${productPrice}`);
//     }


    
// }

