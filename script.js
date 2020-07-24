
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

let characters = {
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbersarray: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  special: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~', '{', '}', '<', '>']
}


function generatePassword() {
  document.getElementById('password').innerHTML = ``
  let pw = ''
  let numberofcharacters = parseInt(prompt('Choose between 8 and 128 characters'))
  if (numberofcharacters < 8 || numberofcharacters > 128) {
    alert('Must be between 8 and 28 characters')
    return
  } else {
    let upperCases = confirm('Would you like uppercase?')
    let lowerCases = confirm('Would you like lowercase?')
    let numbers = confirm('Would you like numbers?')
    let specials = confirm('Would you like special case characters?')
    

    for (let i = 0; i < numberofcharacters; i++) {

      let random = Math.floor(Math.random() * 4)
      if (random === 0) {
        if (upperCases === true) {
          let change = characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)]
          pw = pw + change
          
        } else {
          i--
          
        }

      } else if (random === 1) {
        if (lowerCases == true) {
          let change = characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)]
          pw = pw + change
          
        } else {
          i--
          
        }
      } else if (random === 2) {
        if (numbers === true) {
          let change = characters.numbersarray[Math.floor(Math.random() * characters.numbersarray.length)]
          pw = pw + change
          
        } else {
          i--
          
        }
      } else if (random === 3) {
        if (specials === true) {
          let change = characters.special[Math.floor(Math.random() * characters.special.length)]
          pw = pw + change
          
          } else {
          i--
          
        }


      }
    
    }
  }
  document.getElementById('password').innerHTML = `${pw}`
  return pw
}

generateBtn.addEventListener("click", generatePassword);










