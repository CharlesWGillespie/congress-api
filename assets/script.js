// https://www.loc.gov/{endpoint}/?fo=json
// https:www.loc.gov/search/?q=baseball&fo=json
let userInputElement = document.querySelector("#userInputElement");
let userSearchBtn = document.querySelector("#userSearchBtn");
let userInput = userInputElement.value;

const url = `https://www.loc.gov/search/?q=${userInputElement.value}&fo=json`;

function getTrumpFacts(event) {
  event.preventDefault()    
    fetch(url).then(function (response) {
    return response.json().then(function(data) {
      console.log(data);
    });
  });
}

userSearchBtn.addEventListener('click', getTrumpFacts);
