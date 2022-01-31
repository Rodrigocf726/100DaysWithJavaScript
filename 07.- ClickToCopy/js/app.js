const btn = document.querySelector('.btn');
const cupon = document.querySelector('.cupon');

btn.addEventListener('click', textCopy);

function textCopy(e){
    e.preventDefault();
    cupon.select();
    cupon.setSelectionRange(0, 999999);
    document.execCommand('copy');

    btn.textContent = "Copiado!!";

    setTimeout(() => {
        btn.textContent = "Copiar"
    }, 3000);

}