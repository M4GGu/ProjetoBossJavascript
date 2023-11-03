//Main register that holds all the player attributes.
let player = {
    playerName: "",
    wins:0,
    losses:0
}

//Function that creates a new player based on the main model
function createNewPlayer(name,wins,losses){
    const newPlayer = Object.assign({},player);

    newPlayer.playerName = name;
    newPlayer.wins = wins;
    newPlayer.losses = losses;

    return newPlayer;
}



//function that returns the average win rate and determinates the user rank
function playerRanking(player){
    let result = player.wins - player.losses;
    let rank;

    if(result <= 10){
        rank = "Iron";
    }else if(result >= 11 && result <= 20 ){
        rank = "Bronze";
    }else if (result >= 21 && result <= 50){
        rank = "Silver";
    }else if (result >= 51 && result <= 80){
        rank = "Gold";
    }else if (result >= 81 && result <= 90){
        rank = "Diamond";
    }else if (result >= 91 && result <= 100){
        rank = "Legendary";
    }else{
        rank = "Immortal";
    }

    return rank;
    
}

function playerAverageWinRate(player){
    let result = player.wins - player.losses;
    return result;
}


const Markus = createNewPlayer("Markus",5,3);
const Max = createNewPlayer("Max",30,15);
const Folst = createNewPlayer("Fols",50,25);
const Bloker = createNewPlayer("Bloker",80,10);
const Ahol = createNewPlayer("Ahol",90,2);
const Gokronoi = createNewPlayer("Gokronoi",100,3);
const Mahun = createNewPlayer("Mahun",340,100);


console.log(`The player ${Markus.playerName} score is ${playerAverageWinRate(Markus)} and his rank is ${playerRanking(Markus)}`);
console.log(`The player ${Max.playerName} score is ${playerAverageWinRate(Max)} and his rank is ${playerRanking(Max)}`);
console.log(`The player ${Folst.playerName} score is ${playerAverageWinRate(Folst)} and his rank is ${playerRanking(Folst)}`);
console.log(`The player ${Bloker.playerName} score is ${playerAverageWinRate(Bloker)} and his rank is ${playerRanking(Bloker)}`);
console.log(`The player ${Ahol.playerName} score is ${playerAverageWinRate(Ahol)} and his rank is ${playerRanking(Ahol)}`);
console.log(`The player ${Gokronoi.playerName} score is ${playerAverageWinRate(Gokronoi)} and his rank is ${playerRanking(Gokronoi)}`);
console.log(`The player ${Mahun.playerName} score is ${playerAverageWinRate(Mahun)} and his rank is ${playerRanking(Mahun)}`);

