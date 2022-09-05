//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// HO DATO MENO SECONDI SENNO ASPETTAVAMO UNA VITA.... 10 SECONDI



let alertStart = alert(`Ti appariranno 5 numeri che devovrai memorizzare!
...Riuscirai a ricordarteli nell' ordine corretto? 
ATTENTO ...hai 30 secondi poi spariranno!`)

//COSTANTI E ELEMENTI
const boxRandom = document.getElementById("boxrandom")
const boxInputs = document.getElementById("boxinputs")
const inputs = document.querySelectorAll("input")
console.log(inputs);
const button = document.getElementById("button")
const buttonRestart = document.createElement("button")
buttonRestart.className = ("btn btn-danger m-2")
buttonRestart.innerHTML = "RITENTA"
const array = getRandomNumbers();
console.log(array);
boxRandom.innerHTML = array


//FUNZIONI
function randomNumbers(min, max) {
    let num = Math.floor(Math.random() * max) + min;
    return num
}

function getRandomNumbers() {
    const listNumbers = [];
    while (listNumbers.length < 5) {
        const number = randomNumbers(1, 100);
        if (!listNumbers.includes(number)) {
            listNumbers.push(number);
        }
    }
    return listNumbers
};


function controlGame() {
    for (let i = 0; i < array.length && i < inputs.length; i++) {
        if (array[i] == inputs[i].value) {
            boxInputs.innerHTML += `<h5>Hai inserito il numero <h6 class=" text-success">CORRETTO!</h6> numero estratto : ${array[i]}  numero inserito : ${inputs[i].value}</h5>`
        } else {
            boxInputs.innerHTML += `<h5>Hai inserito il numero <h6 class=" text-danger">SBAGLIATO!</h6> numero estratto : ${array[i]}  numero inserito : ${inputs[i].value}</h5>`
        }
    }
    boxInputs.append(buttonRestart)
}


// TIMING FUNCTION
let alertfunction = setTimeout(function () {
    boxRandom.innerHTML = "";
    boxInputs.classList.remove("d-none");
}, 10000)


//EVENTI
button.addEventListener("click", function () {
    boxInputs.innerHTML = "";
    controlGame()

});

buttonRestart.addEventListener("click", function () {
    window.location.reload()
});
