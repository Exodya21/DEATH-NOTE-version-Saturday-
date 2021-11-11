let names = ['JAUME','DIEGO','LUCAS','ANTHONY','ALEXIS','CARLOS','NADIE'];
let causas = [
  "DESAFIO: TOQUES CON LA PALA DE PING PONG.",
  "DESAFIO: LANZAMIENTO DE BOLAS DE PING PONG.",
  "NORMA: QUIEN TIRE ESE MISMO COLOR BEBE (SOLO 1 RONDA).",
  "NORMA: QUIEN TIRE EL MISMO NUMERO QUE HAY ABAJO BEBE (SOLO 1 RONDA).",
  "NORMA: QUIEN TIRE LA CARTA MAS BAJA EN LA RONDA SIGUIENTE BEBE (EN LA SIGUIENTE RONDA).",
  "NORMA: QUIEN SAQUE LA CARTA MAS BAJA DE ENTRE TODO BEBE.",
  "DESAFIO: HACER UN 3 EN LINIA DE COLOR EN EL CUBO DE RUBIK.",
  "NORMA: QUIEN TENGA 1 CARTA O QUIEN DIGA 'UNO' BEBE (SOLO 1 RONDA).",
  "DESAFIO: CHOCAR LOS 5 CON LOS OJOS CERRADOS (HACER OTRA ITINERACION MAS PARA SACAR EL 2n NOMBRE)",
  "DESAFIO: MINIJUEGO DE MARIO PARTY, QUIEN PIERDA BEBE.",
  "DESAFIO: BEBE EL ULTIMO QUE SE TOQUE LA NARIZ.",
  "DESAFIO GRUPAL DESBLOQUEADO: LOS DoD (DADOS DE LA MUERTE)."
];
let victima = "";
let causa = "";



// Funciones para la musica de fondo
let mysong = document.getElementById("mysong");
let icon = document.getElementById("icon");
icon.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    icon.src = "img/play.png";
  } else {
    mysong.pause();
    icon.src = "img/pause.png";
  }
};
// funciones del PopUp /////////////////////////////////////////////////////////////////

// Funciones para mostrar o cerrar PopUp
function abrir(mostrar, ocultar) {
  document.getElementById(mostrar).style.display = "flex";
  document.getElementById(ocultar).style.display = "none";
}
function cerrar(ocultar, mostrar) {
  document.getElementById(ocultar).style.display = "none";
  document.getElementById(mostrar).style.display = "flex";
}

// Funciones añadir Victimas
function pushnames(value) {
  if ((inputnombres.value.length >= 4) & (inputnombres.value.length <= 12)) {
    names.push(value);
    mostrarnombres();
    inputnombres.value = "";
  } else {
    inputnombres.value = "";
    alert("Nombre no válido");
  }
}

///ENTER/////
document
  .getElementById("inputnombres")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("sub").click();
    }
  });

// funcion Imprimir en popUp
function mostrarnombres() {
  let localizacion = document.getElementById("impresionarray");
  let todolist = "";
  names.forEach((elemento) => {
    todolist += `<li>
                            <button onclick='upDateName(upDate.value)' class="btnname" id= 'upDate' value='${elemento.toUpperCase()}'>${elemento.toUpperCase()}</button>
                            <button onclick = "borrarVictimas(this)" class = "delete" id = "borrar">X</button>
                         </li>`;
  });
  localizacion.innerHTML = todolist;
}

// Funcion borrar Victimas
function borrarVictimas(elementothis) {
  let victimaABorrar = elementothis.previousElementSibling.value;
  let index = rangeArray(names, victimaABorrar);

  names.splice(index, 1);

  mostrarnombres();
}


//Funcion For Loop con filtro devuelve Indice
function rangeArray(array, filter) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == filter) {
      return i;
    }
  }
}
//////////////////////////////////////////////////////////////////


//funcion numero random
function randomNum(maximo) {
  let num = Math.random() * maximo;
  let redondearNum = Math.floor(num);

  return redondearNum;
}

//funcion elegir elemento de lista random
function kill() {
  victima = names.splice(randomNum(names.length), 1)[0];
  causa = causas.splice(randomNum(causas.length), 1)[0];
  console.log("causa: ", causa, "kill :", victima);
}

// funcion fecha random
function diamuerte() {
  let dia = Math.floor(Math.random() * 30) + 1;
  let mes = Math.floor(Math.random() * 12) + 1;
  let año = Math.floor(Math.random() * (2025 - 2021)) + 2021;
  document.getElementById("fecha").innerHTML = `${dia} / ${mes} / ${año}`;
  document.getElementById("victimafecha").innerHTML = `${dia} / ${mes} / ${año}`;
}

//funcion imprimir elementos en el DOOM
function imprimirEnHoja() {
  let localizacionCausa = document.querySelector("#causaMortal");
  let localizacionVictima = document.querySelector("#victima");

  localizacionCausa.innerHTML = causa.toUpperCase();
  localizacionVictima.innerHTML = victima.toUpperCase();
}

// Funcion restablecer Arrays
function resetAndClose() {
  cerrar("containerDN", "inicio");
  names = ['JAUME','DIEGO','LUCAS','ANTHONY','ALEXIS','CARLOS','NADIE'];
  causas = [
    "DESAFIO: TOQUES CON LA PALA DE PING PONG.",
    "DESAFIO: LANZAMIENTO DE BOLAS DE PING PONG.",
    "NORMA: QUIEN TIRE ESE MISMO COLOR BEBE (SOLO 1 RONDA).",
    "NORMA: QUIEN TIRE EL MISMO NUMERO QUE HAY ABAJO BEBE (SOLO 1 RONDA).",
    "NORMA: QUIEN TIRE LA CARTA MAS BAJA EN LA RONDA SIGUIENTE BEBE (EN LA SIGUIENTE RONDA).",
    "NORMA: QUIEN SAQUE LA CARTA MAS BAJA DE ENTRE TODO BEBE.",
    "DESAFIO: HACER UN 3 EN LINIA DE COLOR EN EL CUBO DE RUBIK.",
    "NORMA: QUIEN TENGA 1 CARTA O QUIEN DIGA 'UNO' BEBE (SOLO 1 RONDA).",
    "DESAFIO: CHOCAR LOS 5 CON LOS OJOS CERRADOS (HACER OTRA ITINERACION MAS PARA SACAR EL 2n NOMBRE)",
    "DESAFIO: MINIJUEGO DE MARIO PARTY, QUIEN PIERDA BEBE. (HACER ITINERACIONES PARA VER QUIENES JUEGAN",
    "DESAFIO: BEBE EL ULTIMO QUE SE TOQUE LA NARIZ.",
    "DESAFIO GRUPAL DESBLOQUEADO: LOS DoD (DADOS DE LA MUERTE)."
  ];

  mostrarnombres();
}

//funcion MAIN
function start() {
  if ((names.length != 0) & (causas.length != 0)) {
    abrir("containerDN", "inicio");
    diamuerte();
    kill();
    imprimirEnHoja();
  }
}
