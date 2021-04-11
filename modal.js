/* const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");

const openModal1 = () => {
    modal1.style.display = "block";
}
const openModal2 = () => {
    modal2.style.display = "block";
}
const openModal3 = () => {
    modal3.style.display = "block";
}
const openModal4 = () => {
    modal4.style.display = "block";
}

const closeModal1 = () => {
    modal1.style.display = "none";
}
const closeModal2 = () => {
    modal2.style.display = "none";
}
const closeModal3 = () => {
    modal3.style.display = "none";
}
const closeModal4 = () => {
    modal4.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal3.style.display = "none";
    } else if (event.target == modal4) {
        modal4.style.display = "none";
    } else {
        return
    }
}  */

let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');

let btnModal1 = document.getElementById('btnModal1');
let btnModal2 = document.getElementById('btnModal2');
let btnModal3 = document.getElementById('btnModal3');
let btnModal4 = document.getElementById('btnModal4');

let span = document.getElementsByClassName('close')[0]; /* pasar a close 1, close 2, close 3 */


btnModal1.onclick = () => {
    modal1.style.display = "block";
};

btnModal2.onclick = () => {
    modal2.style.display = "block";
};

btnModal3.onclick = () => {
    modal3.style.display = "block";
};

btnModal4.onclick = () => {
    modal4.style.display = "block";
};


span.onclick = () => {
    modal1.style.display = "none";
};

span.onclick = () => {
    modal2.style.display = "none";
};

span.onclick = () => {
    modal3.style.display = "none";
};

span.onclick = () => {
    modal4.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal3.style.display = "none";
    } else if (event.target == modal4) {
        modal4.style.display = "none";
    } else {
        return
    }
}





