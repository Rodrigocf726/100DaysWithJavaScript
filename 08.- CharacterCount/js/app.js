const count = document.querySelector('.count');
const word = document.querySelector('.word');


word.addEventListener('keyup', () => {
    count.innerHTML = word.value.length;
});