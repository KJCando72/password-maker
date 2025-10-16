const pwordlength = document.getElementById("numIncre");
const upperButton = document.getElementById("upper");
const lowerButton = document.getElementById("lower");
const symbolButton = document.getElementById("symbols");
const numberButton = document.getElementById("numbers");
const randomize = document.getElementById("random");
const submitButton = document.getElementById("subBTN");
const pword = document.getElementById("pword");

//allows number incrementer to be implemented into function
let pSize;


const lowerChars= "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = `~!@#$%^&*()-_=+[{|}];:'",<.>/?`;
const numberChars = `1234567890`;


//function to make password based on user input
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
    return { password, allowedChars };
}

//randomizes all options if randomize is checked
randomize.onclick = function(){
    pSize = Math.floor(Math.random() * 30) + 5;
    pwordlength.value = pSize;
    lowerButton.checked = Math.random() < 0.5;
    upperButton.checked = Math.random() < 0.5;
    symbolButton.checked = Math.random() < 0.5;
    numberButton.checked = Math.random() < 0.5;
    }

//if functions catch any errors that would disrupt password making process
submitButton.onclick = function(){
    const result = makePassword();
    const password = result.password;
    const allowedChars = result.allowedChars;
    if(pSize <= 0){
        pword.textContent = `Password length must be at least 1 character`; 
     }
    else if(allowedChars.length === 0){
        pword.textContent = "Please select at least one character type";
    }
    else {
        pword.textContent = `Generated Password: ${password}`;
    }
}

