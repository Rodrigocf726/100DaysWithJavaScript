const btn = document.querySelector("#btn");
const number = document.querySelector("#number");

btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();

  if(number.value.length === 0){
    return alert("Please select a number");
  }else{
    let url = "https://type.fit/api/quotes";

    fetch(url)
      .then( response => response.json())
      .then( data => {
        data = shuffle(data);
        let output = "";

        for (let i = 0; i < data.length; i++) {
          const { text, author } = data[i];
          if(i == number.value){break;}
          output += `
                      <li>Quote: ${text}</li>
                      <li>Author: ${author}</li>
                      <hr>
                  `;
        }
        document.querySelector("#quotes").innerHTML = output;
      })
      .catch(err => console.log(err));
  }
}


function shuffle(quotes){
  let CI = quotes.length, tempValue, randomIndex;

  // While elements exist in the array 
  while(CI > 0){
    randomIndex = Math.floor(Math.random() * CI);
    //Decrease CI by 1
    CI--;

    //SWAP the last element whit CI
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  };

  return quotes;
}