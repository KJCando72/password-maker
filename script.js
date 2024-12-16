const pwordlength = document.getElementById("numIncre");
const upperButton = document.getElementById("upper");
const lowerButton = document.getElementById("lower");
const symbolButton = document.getElementById("symbols");
const numberButton = document.getElementById("numbers");
const submitButton = document.getElementById("subBTN");
const pword = document.getElementById("pword");

//allows number incrementer to be implemented into function
let pSize;


const lowerChars= "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = `~!@#$%^&*()-_=+[{|}];:'",<.>/?`;
const numberChars = `1234567890`;


function makePassword(){
    pSize = Number(pwordlength.value);
    let allowedChars = "";
    let password = ""; 

//takes out any of the options that aren't checked from being in the password
    allowedChars += lowerButton.checked ? lowerChars : "";
    allowedChars += upperButton.checked ? upperChars : "";
    allowedChars += symbolButton.checked ? symbolChars : "";
    allowedChars += numberButton.checked ? numberChars : "";
    
//floor function made to catch any out-of-bound errors or decimals
    for(let i = 0; i < pSize; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

//if functions catch any errors that would disrupt password making process
submitButton.onclick = function(){
    const password = makePassword();
    if(pSize >= 35){
        pword.textContent = `LENGTH TOO LONG. PLEASE MAKE IT SHORTER`;
    }
    else if(pSize <= 0){
        pword.textContent = `PASSWORD CANNOT BE 0. PLEASE MAKE IT LONGER`; 
     }
    else {
        pword.textContent = `Generated Password: ${password}`;
    }
}
