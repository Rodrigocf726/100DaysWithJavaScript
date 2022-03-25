const btn = document.querySelector('.btn');
const userLocation = document.querySelector('.location');

btn.addEventListener('click', getLocation);

function getLocation(){
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    userLocation.innerHTML = `
                                Latitud: ${position.coords.latitude} <br>
                                Longitude: ${position.coords.longitude}
                            `;
}