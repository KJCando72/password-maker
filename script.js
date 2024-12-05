const pwordlength = 15;
const upperButton = document.getElementById("upper");
const lowerButton = document.getElementById("lower");
const symbolButton = document.getElementById("symbols");
const numberButton = document.getElementById("numbers");
const submitButton = document.getElementById("subBTN");

const lowerChars= "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = `~!@#$%^&*()-_=+[{|}];:'",<.>/?`;
const numberChars = `1234567890`;


function makePassword(){
    let allowedChars = "";
    let password = ""; 
    
    allowedChars += lowerButton.checked ? lowerChars : "";
    allowedChars += upperButton.checked ? upperChars : "";
    allowedChars += symbolButton.checked ? symbolChars : "";
    allowedChars += numberButton.checked ? numberChars : "";
    
    if(pwordlength <= 0){
       console.log(`make length longer`); 
    }
    if(allowedChars === 0){
        return `(Select One of the boxes)`;
    }

    for(let i = 0; i < pwordlength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

submitButton.onclick = function(){
    const password = makePassword();
    console.log(`Generated Password: ${password}`);
}
