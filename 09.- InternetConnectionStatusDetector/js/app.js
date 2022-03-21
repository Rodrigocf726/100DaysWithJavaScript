// Eventos para detectar si existe la conexion o no

// window.addEventListener('load', event => {
//     const statusDisplay = document.querySelector('#status');
//     statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
// });

// window.addEventListener('offline', event => {
//     const statusDisplay = document.querySelector('#status');
//     statusDisplay.textContent = "Offline";
// });

// window.addEventListener('online', event => {
//     const statusDisplay = document.querySelector('#status');
//     statusDisplay.textContent = "Online";
// });


/**
 * Lo siguiente sirve para realizar una recuperacion exitosa a un servidor, en este caso sera a una imagen de wikipedia,
 * realmente la imagen no se mostrara solo servira e ayuda para saber si contamos con conexion a internet para poder 
 * obtenerla, en caso de no querer hacerlo de esta manera, la opcion de codigo anterior termina el proyecto de deteccion de conexion a internet
 * 
*/

// Variables 
const bgColor = document.querySelector('#main'); 
const image = document.querySelector('#image');
const statusDisplay = document.querySelector('#status');

function setColor(){
    bgColor.classList.add('online');
}

async function connectionStatus(){
    try{
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
        image.style.display = "block";
        image.src = "./img/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    } 
    catch(error){
        statusDisplay.textContent = "OOPS!! Your internet connection is down";
        image.style.display = "block";
        image.src = "./img/offline.png";
        bgColor.classList.remove("online");
    }
}

// Monitor the connection
setInterval(async () => {
    const result = await connectionStatus();
    if(result){
        statusDisplay.textContent = "You're Online, Connection looks good";
        setColor();
    }
}, 5000);

// Check connection when the page loads
window.addEventListener('load', async event => {
    if(connectionStatus()){
        statusDisplay.textContent = "You're Online";
    }else{
        statusDisplay.textContent = "You're Offline";
    }
});