const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', palindromo);

function palindromo(e){
    e.preventDefault();
    let word = document.querySelector('.input-text').value;
    let rep = word.replace(/[\W_]/g, '');
    const lowered = rep.toLowerCase();
    const splitted = lowered.split('');
    const reverse = splitted.reverse();
    const joined = reverse.join('');

    if(lowered == joined){
        result.innerHTML = `${word} -> es palindromo`;
    }else{
        result.innerHTML = `${word} -> no es palindromo`;
    }
    // return lowered == joined;
}


// / [\ W _] / g

// [ y ]   son el comienzo y el final de un juego de caracteres.
// \W  significa "sin palabra", a diferencia de \wque coincidirá con una palabra.
// _   es el carácter "_".
// /   marcar el principio y el final de una expresión regular.
// g   significa que es una búsqueda global.