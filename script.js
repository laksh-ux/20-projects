const coin = document.getElementById("coin");
const flipButton = document.getElementById("flipButton");
const statuslabel = document.querySelector("#status");
const heads = document.getElementById("headsCount");
const tails = document.getElementById("tailsCount");

let headsCount = 0;
let tailsCount = 0;

function processResult(result){
    if(result === 'heads'){
        headsCount++;
        heads.innerHTML = headsCount;
    }
    else{
        tailsCount++;
        tails.innerHTML = tailsCount;
    }

    statuslabel.innerText = result.toUpperCase();
}

function flipCoin(){
    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails';
    coin.setAttribute('class',' ');
    void coin.offsetWidth;
    setTimeout (()=> {
        coin.setAttribute('class','animate-'+ result);

        setTimeout(()=>{
            processResult(result);
        },2900);
    },100);
}
flipButton.addEventListener('click',flipCoin);

