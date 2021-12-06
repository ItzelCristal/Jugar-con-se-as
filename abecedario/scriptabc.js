const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');

// current phrase being dragged
let selectedId;

// target phrase
let dropTargetId;

// counter for correct phrases
let matchingCounter = 0;

addEventListeners();

function dragStart() {
    selectedId = this.id;
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(ev) {
    ev.preventDefault();
}

function dragDrop() {
    dropTargetId = this.id;

    if (checkForMatch(selectedId, dropTargetId)) {
        document.getElementById(selectedId).style.display = 'none';
        document.getElementById(dropTargetId).style.display = 'none';
        matchingCounter++;
    } else if (checkForMatch2(selectedId, dropTargetId)) {
        document.getElementById(selectedId).style.display = 'none';
        document.getElementById(dropTargetId).style.display = 'none';
        matchingCounter++;
    }

    if (matchingCounter === 27) {
        endMessage.style.display = 'block';
    }

    this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
    switch (selected) {
        case 'e1':
            return dropTarget === 's1' ? true : false;

        case 'e2':
            return dropTarget === 's2' ? true : false;

        case 'e3':
            return dropTarget === 's3' ? true : false;

        case 'e4':
            return dropTarget === 's4' ? true : false;

        case 'e5':
            return dropTarget === 's5' ? true : false;
        case 'e6':
            return dropTarget === 's6' ? true : false;

        case 'e7':
            return dropTarget === 's7' ? true : false;

        case 'e8':
            return dropTarget === 's8' ? true : false;

        case 'e9':
            return dropTarget === 's9' ? true : false;

        case 'e10':
            return dropTarget === 's10' ? true : false;
        case 'e11':
            return dropTarget === 's11' ? true : false;

        case 'e12':
            return dropTarget === 's12' ? true : false;

        case 'e13':
            return dropTarget === 's13' ? true : false;

        case 'e14':
            return dropTarget === 's14' ? true : false;

        case 'e15':
            return dropTarget === 's15' ? true : false;
        case 'e16':
            return dropTarget === 's16' ? true : false;

        case 'e17':
            return dropTarget === 's17' ? true : false;

        case 'e18':
            return dropTarget === 's18' ? true : false;

        case 'e19':
            return dropTarget === 's19' ? true : false;

        case 'e20':
            return dropTarget === 's20' ? true : false;
        case 'e21':
            return dropTarget === 's21' ? true : false;

        case 'e22':
            return dropTarget === 's22' ? true : false;

        case 'e23':
            return dropTarget === 's23' ? true : false;

        case 'e24':
            return dropTarget === 's24' ? true : false;

        case 'e25':
            return dropTarget === 's25' ? true : false;
        case 'e26':
            return dropTarget === 's26' ? true : false;

        case 'e27':
            return dropTarget === 's27' ? true : false;

        case 'e28':
            return dropTarget === 's28' ? true : false;

        case 'e29':
            return dropTarget === 's29' ? true : false;
        default:
            return false;
    }
}

function checkForMatch2(selected, dropTarget) {
    switch (selected) {
        case 's1':
            return dropTarget === 'e1' ? true : false;

        case 's2':
            return dropTarget === 'e2' ? true : false;

        case 's3':
            return dropTarget === 'e3' ? true : false;

        case 's4':
            return dropTarget === 'e4' ? true : false;

        case 's5':
            return dropTarget === 'e5' ? true : false;
        case 's6':
            return dropTarget === 'e6' ? true : false;

        case 's7':
            return dropTarget === 'e7' ? true : false;

        case 's8':
            return dropTarget === 'e8' ? true : false;

        case 's9':
            return dropTarget === 'e9' ? true : false;

        case 's10':
            return dropTarget === 'e10' ? true : false;
        case 's11':
            return dropTarget === 'e11' ? true : false;

        case 's12':
            return dropTarget === 'e12' ? true : false;

        case 's13':
            return dropTarget === 'e13' ? true : false;

        case 's14':
            return dropTarget === 'e14' ? true : false;

        case 's15':
            return dropTarget === 'e15' ? true : false;
        case 's16':
            return dropTarget === 'e16' ? true : false;

        case 's17':
            return dropTarget === 'e17' ? true : false;

        case 's18':
            return dropTarget === 'e18' ? true : false;

        case 's19':
            return dropTarget === 'e19' ? true : false;

        case 's20':
            return dropTarget === 'e20' ? true : false;
        case 's21':
            return dropTarget === 'e21' ? true : false;

        case 's22':
            return dropTarget === 'e22' ? true : false;

        case 's23':
            return dropTarget === 'e23' ? true : false;

        case 's24':
            return dropTarget === 'e24' ? true : false;

        case 's25':
            return dropTarget === 'e25' ? true : false;
        case 's26':
            return dropTarget === 'e26' ? true : false;

        case 's27':
            return dropTarget === 'e27' ? true : false;

        case 's28':
            return dropTarget === 'e28' ? true : false;

        case 's29':
            return dropTarget === 'e29' ? true : false;
        default:
            return false;
    }
}

function playAgain() {
    matchingCounter = 0;
    endMessage.style.display = 'none';
    draggableListItems.forEach(item => {
        document.getElementById(item.id).style.display = 'block';
    })
}

function addEventListeners() {
    draggableListItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
    })
}
let nodoAltavoz = document.querySelector('#altavoz');

// Variables para los sonidos

var fondo = new Audio('audio/fondo.mp3');
fondo.loop = true; // Hacemos que si termina la música de fondo se repita
fondo.volume = 0.2; // Establecemos el volumen

function controlMusicaFondo() {
    // Si la música no está pausada...
    if (!fondo.paused) {
        // Paramos la música
        fondo.pause();

        // Cambiamos la imagen del altavoz
        nodoAltavoz.src = 'img/altavozOff.png';
        // Si no está parada
    } else {
        // Reproducimos la música
        fondo.play();

        // Cambiamos la imagen del altavoz
        nodoAltavoz.src = 'img/altavozOn.png';
    }
}