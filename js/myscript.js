// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// variabili globali
const gridElement = document.getElementById("grid");
const play = document.getElementById("play");
let numbOfCell;

// generatore griglia
play.addEventListener('click',
    function () {
        let cells = 100;

        // reset
        gridElement.innerHTML = "";

        // ciclo
        for (i = 1; i <= cells; i++) {

            // creazione elemento
            const square = document.createElement('div');

            // aggiunta classe
            square.classList.add("square")

            // aggiunta alla griglia
            gridElement.append(square);

            // aggiunta numero nelle celle
            numbOfCell = i;
            square.innerHTML = numbOfCell;

            // interazione cella
            square.addEventListener('click',
                function () {
                    square.classList.add("blue");
                }
            )
        }

    }

)

