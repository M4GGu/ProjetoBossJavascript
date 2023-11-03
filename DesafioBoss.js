let herois = [
    ["Bosser",850],
    ["Destroyer",3000],
    ["Balder",5000],
    ["Kroasson",1650],
    ["Luper",10000],
    ["Bamper",9222],
    ["Folsson",6500],
    ["Okxdy",7300],
    ["Holder",8923],
    ["Sparus",16700],
    ["Doter",25000],
    ["Plock",50000],
    ["Cortracs",75000]
];

let rank = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"];

herois.forEach(function(nome){
    
    if(nome[1] < 1000){
        console.log(`O Herói: ${nome[0]} está no nível ${rank[0]}`);

    } else if(nome[1] >= 1001 && nome[1] <= 2000){
        console.log(`O Herói: ${nome[0]} está no nível ${rank[1]}`);
        
    } else if(nome[1] >= 2001 && nome[1] <= 5000){
        console.log(`O Herói: ${nome[0]} está no nível ${rank[2]}`);

    } else if(nome[1] >= 6001 && nome[1] <= 7000){
        console.log(`O Herói: ${nome[0]} está no nível ${rank[3]}`);
        
    }else if(nome[1] >= 7001 && nome[1] <= 8000 ){
        console.log(`O Herói: ${nome[0]} está no nível ${rank[4]}`);
        
    }else if(nome[1] >= 8001 && nome[1] <= 9000){
        console.log(`O Herói: ${nome[0]} está no nível ${rank[5]}`);
        
    }else if(nome[1] >= 9001 && nome[1] <= 10000){
        console.log(`O Herói: ${nome[0]} está no nível ${rank[6]}`);

    }else{
        console.log(`O Herói: ${nome[0]} está no nível ${rank[7]}`);
        
    }
})



