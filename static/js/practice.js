const row = localStorage.getItem('row')
let keys;

// rows and keys
const r1 = "QWERTYUIOP";
const r2 = "ASDFGHJKL;";
const r3 = "ZXCVBNM,./";

// setting rows
switch (Number(row)) {
    case 1:
        keys=r1;
        break;
    case 2:
        keys=r2;
        break;
    case 3:
        keys=r3;
        break;
    case 12:
        keys=r1+r2;
        break;
    case 23:
        keys=r2+r3;
        break;
    case 123:
        keys=r1+r2+r3;
        break;
}

let keybox = document.getElementById("keys");
let keySet;
let n;

keys = keys.split('');

// function to append keys in KeyBox #keys
function start(){
    keybox.innerHTML = "";
    keySet = getKeys(keys);
    
    keySet.forEach((key)=>{
        let s = document.createElement("span");
        s.className = 'key';
        s.innerHTML = key.toUpperCase();
        keybox.append(s)
    });
    n=0;
}

start();

// when any keypressed
document.addEventListener('keydown',(event)=>{
    let pressedKey = event.key.toLowerCase();
    // match pressed key and appended keys
    if(pressedKey.toLowerCase() === keySet[n].toLowerCase()){
        document.querySelector(`#keys :nth-child(${n+1})`).style.backgroundColor = "#8f8";
    }else{
        document.querySelector(`#keys :nth-child(${n+1})`).style.backgroundColor = "#f88";
    }
    n++;

    // if reached the end append the keys and start iteration from 0 again and again
    if(n==keySet.length){
        setTimeout(start,300);
    }
});

// get list of random keys of randomly 5-10 length
function getKeys(keys){
    let rn = getR([5,6,7,8,9,10]);
    let keyList = [];
    for(let i=0; i<rn; i++){
        keyList.push(getR(keys))
    }
    return keyList;
}

// get random key
function getR(list){
    const ri = Math.floor(Math.random() * list.length)
    return list[ri];
}
