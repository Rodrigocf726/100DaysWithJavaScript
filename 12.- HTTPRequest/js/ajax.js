// Load userss
const btn = document.querySelector('#btn');
const usersDisplay = document.querySelector('#users');

btn.addEventListener('click', getUsers);

function getUsers(e){
    e.preventDefault();

    const http = new XMLHttpRequest();
    //Tipo de peticion GET del archivo / es asincrono?
    http.open("GET", "./users.json", true);
    http.onload = function() {
        if(this.status === 200){
            // console.log(`It's Ok ${this.responseText}`);
            const users = JSON.parse(this.responseText);

            let output = "";
            users.forEach(user => {
                output += `
                    <hr>
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;
            });

            usersDisplay.innerHTML = output;
        }
    }

    http.send();
}