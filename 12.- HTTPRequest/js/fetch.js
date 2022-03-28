const btn = document.querySelector('#btn');
const usersDisplay = document.querySelector('#users');

btn.addEventListener('click', getUsers);

function getUsers(e){
    e.preventDefault();
    fetch('./users.json')
        .then( response => response.json())
        .then( data => displayUsersHTML(data))
        .catch( error => console.log(error));
}

function displayUsersHTML(data){
    let output = "";

    data.forEach(user => {
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