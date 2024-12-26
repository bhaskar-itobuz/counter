const num = document.getElementsByClassName("number")[0];

function increase() {
    const inser = Number(num.innerText) + 1;
    num.innerText = inser;
    inser > 0 ? num.style.color = "green" : num.style.color = "red";
}

function reset() {
    num.innerText = "0";
    num.style.color = "black";
}

function decrease() {
    const desc = Number(num.innerText) - 1;
    num.innerText = desc;
    desc > 0 ? num.style.color = "green" : num.style.color = "red";
}
