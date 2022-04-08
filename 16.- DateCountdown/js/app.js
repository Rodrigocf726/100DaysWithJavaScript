const countTo = "1 Jan 2023";

const c = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();
  const totalSeconds = ( endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600 ) % 24;
  const  minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const countDown = document.querySelector('#countdown');
  countDown.textContent = `${format(days)} days ${format(hours)} hours ${format(minutes)} min ${format(seconds)} s`;

  if( totalSeconds < 0){
    clearInterval(c);
    countDown.textContent = "Happy new Year!!!!";
  }
}, 1000);


function format(t){
  return t < 10 ? `0${t}` : t;
}