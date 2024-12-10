const pwordlength = document.getElementById("numIncre");
const upperButton = document.getElementById("upper");
const lowerButton = document.getElementById("lower");
const symbolButton = document.getElementById("symbols");
const numberButton = document.getElementById("numbers");
const submitButton = document.getElementById("subBTN");
const pword = document.getElementById("pword");

//Allows number incrementer input to be implemented into function
let pSize;


const lowerChars= "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = `~!@#$%^&*()-_=+[{|}];:'",<.>/?`;
const numberChars = `1234567890`;


function makePassword(){
    pSize = Number(pwordlength.value);
    let allowedChars = "";
    let password = ""; 

 //Takes out any options that aren't checked from the password maker.
    allowedChars += lowerButton.checked ? lowerChars : "";
    allowedChars += upperButton.checked ? upperChars : "";
    allowedChars += symbolButton.checked ? symbolChars : "";
    allowedChars += numberButton.checked ? numberChars : "";
    
    
 //Troubleshooting for when the user doesn't input specific info.
    if(pSize <= 0){
       pword.textContent = `Please select a bigger number`; 
    }
    if(allowedChars === 0){
        pword.textContent =  `Select One of the boxes`;
    }

    //Floor function prevents any out-of-bounds errors in password creation
    for(let i = 0; i < pSize; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

submitButton.onclick = function(){
    const password = makePassword();
    pword.textContent = `Generated Password: ${password}`;
}
