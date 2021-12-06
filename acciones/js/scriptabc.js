let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="lsm/A.jpg" width= "100%" > ',
        '<img src="lsm/B.png" width= "100%" > ',
        '<img src="lsm/C.png" width= "100%">',
        '<img src="lsm/D.png" width= "100%">',
        '<img src="lsm/E.png" width= "100%">',
        '<img src="lsm/F.png" width= "100%">',
        '<img src="lsm/G.png" width= "100%">',
        '<img src="lsm/H.png" width= "100%">',
        '<img src="lsm/I.png" width= "100%">',
        '<img src="lsm/J.png" width= "100%">',
        '<img src="lsm/K.png" width= "100%">',
        '<img src="lsm/L.png" width= "100%">',
        '<img src="lsm/LL.png" width= "100%">',
        '<img src="lsm/M.png" width= "100%">',
        '<img src="lsm/N.png" width= "100%">',
        '<img src="lsm/Ñ.png" width= "100%">',
        '<img src="lsm/O.png" width= "100%">',
        '<img src="lsm/P.png" width= "100%">',
        '<img src="lsm/Q.png" width= "100%">',
        '<img src="lsm/R.png" width= "100%">',
        '<img src="lsm/RR.png" width= "100%">',
        '<img src="lsm/S.png" width= "100%">',
        '<img src="lsm/T.png" width= "100%">',
        '<img src="lsm/U.png" width= "100%">',
        '<img src="lsm/V.png" width= "100%">',
        '<img src="lsm/W.png" width= "100%">',
        '<img src="lsm/X.png" width= "100%">',
        '<img src="lsm/Y.png" width= "100%">',
        '<img src="lsm/Z.png" width= "100%">',
    ]
}

function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 32; i++) {
        tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                        '<img src="imgabc/back.png" width= "100%">
                        </div>
                    </div>
                </div>        
                `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        } else {
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 1000);
}