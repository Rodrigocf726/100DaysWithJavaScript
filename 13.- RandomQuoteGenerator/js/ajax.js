const btn = document.querySelector("#btn");
const number = document.querySelector("#number");

btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();

  if (number.value.length == 0) {
    return alert("Please enter a number");
  } else {
    const https = new XMLHttpRequest();
    https.open("GET", "https://type.fit/api/quotes", true);

    https.onload = function () {
      if (this.status === 200) {
        // console.log(this.responseText);
        const response = shuffle(JSON.parse(this.responseText));
        let output = "";

        // response.forEach((quote) => {
        //   const { text, author } = quote;
        //   output += `
        //               <li>Quote: ${text}</li>
        //               <li>Quote: ${author}</li>
        //               <hr>
        //           `;
        // });

        for (let i = 0; i < response.length; i++) {
          const { text, author } = response[i];
          if(i == number.value){break;}
          output += `
                      <li>Quote: ${text}</li>
                      <li>Author: ${author}</li>
                      <hr>
                  `;
        }

        document.querySelector("#quotes").innerHTML = output;
      }
    };
    https.send();
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