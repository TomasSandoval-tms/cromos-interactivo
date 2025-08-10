const selectCant = document.getElementById('opc');
let personajeDestacadoGlobal = null;
let miniInfoGlobal = null;

const personajes = [
  { nombre: "Merlin", imagen: "imagenes/Merlin.png", cromo: 1 },
  { nombre: "Cornelius Agripa", imagen: "imagenes/CorneliusAgripa.png", cromo: 2 },
  { nombre: "Elfrida Clagg", imagen: "imagenes/ElfridaClagg.png", cromo: 3 },
  { nombre: "Grogan Stump", imagen: "imagenes/GroganStump.png", cromo: 4 },
  { nombre: "Gulliver Pokeby", imagen: "imágenes/GulliverPokeby.png", cromo: 5 },
  { nombre: "Glanmore Peakes", imagen: "imágenes/glanmorePeakes.png", cromo: 6 },
  { nombre: "Hesper Starkey", imagen: "imágenes/hesperStarkey.png", cromo: 7 },
  { nombre: "Derwent Shimpling", imagen: "imágenes/derwentShimpling.png", cromo: 8 },
  { nombre: "Gunhilda De Gorsemoor", imagen: "imágenes/gunhildaDeGorsemoor.png", cromo: 9 },
  { nombre: "Muldoon Burdock", imagen: "imágenes/muldoonBurdock.png", cromo: 10 },
  { nombre: "Herpo el Loco", imagen: "imágenes/herpoElLoco.png", cromo: 11 },
  { nombre: "El Malicioso Merwyn", imagen: "imágenes/elMaliciosoMerwyn.png", cromo: 12 },
  { nombre: "El Invencible Andros", imagen: "imágenes/elInvencibleAndros.png", cromo: 13 },
  { nombre: "El Miedoso Fulbert", imagen: "imágenes/elMiedosoFulbert.png", cromo: 14 },
  { nombre: "Paracelso", imagen: "imágenes/paracelso.png", cromo: 15 },
  { nombre: "Cliodna", imagen: "imágenes/cliodna.png", cromo: 16 },
  { nombre: "Morgan le Fay", imagen: "imágenes/morganLeFay.png", cromo: 17 },
  { nombre: "Uric el Chiflado", imagen: "imágenes/uricElChiflado.png", cromo: 18 },
  { nombre: "Newt Scamander", imagen: "imágenes/newtScamander.png", cromo: 19 },
  { nombre: "La Rara Wendelin", imagen: "imágenes/laRaraWendelin.png", cromo: 20 },
  { nombre: "Lord Stoddard Withers", imagen: "imágenes/lordStoddardWithers.png", cromo: 21 },
  { nombre: "Circe", imagen: "imágenes/circe.png", cromo: 22 },
  { nombre: "Glenda Chittok", imagen: "imágenes/glendaChittok.png", cromo: 23 },
  { nombre: "Adalbert Waffling", imagen: "imágenes/adalbertWaffling.png", cromo: 24 },
  { nombre: "Perpetua Fancourt", imagen: "imágenes/perpetuaFancourt.png", cromo: 25 },
  { nombre: "Almerick Sawbridge", imagen: "imágenes/almerikSawbridge.png", cromo: 26 },
  { nombre: "Mirabella Plunkett", imagen: "imágenes/mirabellaPlunkett.png", cromo: 27 },
  { nombre: "Tilly Toke", imagen: "imágenes/tillyToke.png", cromo: 28 },
  { nombre: "Archibald Alderton", imagen: "imágenes/archibaldAlderton.png", cromo: 29 },
  { nombre: "Artemisa Lufkin", imagen: "imágenes/artemisaLufkin.png", cromo: 30 },
  { nombre: "Balfour Blane", imagen: "imágenes/balfourBlane.png", cromo: 31 },
  { nombre: "Bridget Wenlock", imagen: "imágenes/bridgetWenlock.png", cromo: 32 },
  { nombre: "Beaumont Majoribanks", imagen: "imágenes/beaumontMajoribanks.png", cromo: 33 },
  { nombre: "Donaghan Tremlett", imagen: "imágenes/donaghanTremlett.png", cromo: 34 },
  { nombre: "Bowman Wright", imagen: "imágenes/bowmanWright.png", cromo: 35 },
  { nombre: "Jocelind Wadcock", imagen: "imágenes/jocelindWadcock.png", cromo: 36 },
  { nombre: "Cassandra Vablatsky", imagen: "imágenes/cassandraVablatsky.png", cromo: 37 },
  { nombre: "Chauncey Oldridge", imagen: "imágenes/chaunceyOldridge.png", cromo: 38 },
  { nombre: "Gwenog Jones", imagen: "imágenes/gwenogJones.png", cromo: 39 },
  { nombre: "Carlotta Pinkstone", imagen: "imágenes/carlottaPinkstone.png", cromo: 40 },
  { nombre: "Godric Gryffindor", imagen: "imágenes/godricGryffindor.png", cromo: 41 },
  { nombre: "Crispin Cronk", imagen: "imágenes/crispinCronk.png", cromo: 42 },
  { nombre: "Cyprian Youdle", imagen: "imágenes/cyprianYoudle.png", cromo: 43 },
  { nombre: "Devlin Whitehorn", imagen: "imágenes/devlinWhitehorn.png", cromo: 44 },
  { nombre: "Dunbar Oglethorpe", imagen: "imágenes/dunbarOglethorpe.png", cromo: 45 },
  { nombre: "Miranda Goshawk", imagen: "imágenes/mirandaGoshawk.png", cromo: 46 },
  { nombre: "Edgar Stroulger", imagen: "imágenes/edgarStroulger.png", cromo: 47 },
  { nombre: "Salazar Slytherin", imagen: "imágenes/salazarSlytherin.png", cromo: 48 },
  { nombre: "Elladora Ketteridge", imagen: "imágenes/elladoraKetteridge.png", cromo: 49 },
  { nombre: "Musidora Barkwith", imagen: "imágenes/musidoraBarkwith.png", cromo: 50 },
  { nombre: "Ethelred el Siempre Listo", imagen: "imágenes/ethelredElSiempreListo.png", cromo: 51 },
  { nombre: "Felix Summerbee", imagen: "imágenes/felixSummerbee.png", cromo: 52 },
  { nombre: "Gretha Catchlove", imagen: "imágenes/grethaCatchlove.png", cromo: 53 },
  { nombre: "Gaspard Shingleton", imagen: "imágenes/gaspardShingleton.png", cromo: 54 },
  { nombre: "Honoria Nutcombe", imagen: "imágenes/honoriaNutcombe.png", cromo: 55 },
  { nombre: "Gideon Crumb", imagen: "imágenes/gideonCrumb.png", cromo: 56 },
  { nombre: "Gifford Ollerton", imagen: "imágenes/giffordOllerton.png", cromo: 57 },
  { nombre: "Glover Hipworth", imagen: "imágenes/gloverHipworth.png", cromo: 58 },
  { nombre: "Gregory el Adulador", imagen: "imágenes/gregoryElAdulador.png", cromo: 59 },
  { nombre: "Laverne de Montmorency", imagen: "imágenes/laverneDeMontmorency.png", cromo: 60 },
  { nombre: "Havelock Sweeting", imagen: "imágenes/havelockSweeting.png", cromo: 61 },
  { nombre: "Ignatia Wildsmith", imagen: "imágenes/ignatiaWildsmith.png", cromo: 62 },
  { nombre: "Herman Wintringham", imagen: "imágenes/hermanWintringham.png", cromo: 63 },
  { nombre: "Jocunda Sykes", imagen: "imágenes/jocundaSykes.png", cromo: 64 },
  { nombre: "Gondoline Oliphant", imagen: "imágenes/gondolineOliphant.png", cromo: 65 },
  { nombre: "Flavius Belby", imagen: "imágenes/flaviusBelby.png", cromo: 66 },
  { nombre: "Justus Pilliwickle", imagen: "imágenes/justusPilliwickle.png", cromo: 67 },
  { nombre: "Kirley Duke McCormack", imagen: "imágenes/kirleyDukeMcCormack.png", cromo: 68 },
  { nombre: "Bertie Bott", imagen: "imágenes/bertieBott.png", cromo: 69 },
  { nombre: "Leopoldina Smethwyck", imagen: "imágenes/leopoldinaSmethwyck.png", cromo: 70 },
  { nombre: "Maeva Queen", imagen: "imágenes/maevaQueen.png", cromo: 71 },
  { nombre: "Helga Hufflepuff", imagen: "imágenes/helgaHufflepuff.png", cromo: 72 },
  { nombre: "Mopsus", imagen: "imágenes/mopsus.png", cromo: 73 },
  { nombre: "Montague Knightly", imagen: "imágenes/montagueKnightly.png", cromo: 74 },
  { nombre: "Mungo Bonham", imagen: "imágenes/mungoBonham.png", cromo: 75 },
  { nombre: "Myron Wagtail", imagen: "imágenes/myronWagtail.png", cromo: 76 },
  { nombre: "Norvel Twonk", imagen: "imágenes/norvelTwonk.png", cromo: 77 },
  { nombre: "Orsino Thruston", imagen: "imágenes/orsinoThruston.png", cromo: 78 },
  { nombre: "Oswald Beamish", imagen: "imágenes/oswaldBeamish.png", cromo: 79 },
  { nombre: "Beatrix Bloxman", imagen: "imágenes/beatrixBloxman.png", cromo: 80 },
  { nombre: "Quong Po", imagen: "imágenes/quongPo.png", cromo: 81 },
  { nombre: "Rowena Ravenclaw", imagen: "imágenes/rowenaRavenclaw.png", cromo: 82 },
  { nombre: "Roderick Plumpton", imagen: "imágenes/roderickPlumpton.png", cromo: 83 },
  { nombre: "Roland Kegg", imagen: "imágenes/rolandKegg.png", cromo: 84 },
  { nombre: "Blemhein Stalk", imagen: "imágenes/blemheinStalk.png", cromo: 85 },
  { nombre: "Dorcas Wellbeloved", imagen: "imágenes/dorcasWellbeloved.png", cromo: 86 },
  { nombre: "Taddeus Thurkell", imagen: "imágenes/taddeusThurkell.png", cromo: 87 },
  { nombre: "Celestina Warbeck", imagen: "imágenes/celestinaWarbeck.png", cromo: 88 },
  { nombre: "Alberta Toothill", imagen: "imágenes/albertaToothill.png", cromo: 89 },
  { nombre: "Sacharissa Tugwood", imagen: "imágenes/sacharissaTugwood.png", cromo: 90 },
  { nombre: "Wilfred Elphick", imagen: "imágenes/wilfredElphick.png", cromo: 91 },
  { nombre: "Xavier Rastrick", imagen: "imágenes/xavierRastrick.png", cromo: 92 },
  { nombre: "Heathcote Barbary", imagen: "imágenes/heathcoteBarbary.png", cromo: 93 },
  { nombre: "Merton Graves", imagen: "imágenes/mertonGraves.png", cromo: 94 },
  { nombre: "Yardley Platt", imagen: "imágenes/yardleyPlatt.png", cromo: 95 },
  { nombre: "Hengist De Woodcroft", imagen: "imágenes/hengistDeWoodcroft.png", cromo: 96 },
  { nombre: "Alberic Grunnion", imagen: "imágenes/albericGrunnion.png", cromo: 97 },
  { nombre: "Dymphna Furmage", imagen: "imágenes/dymphnaFurmage.png", cromo: 98 },
  { nombre: "Daisy Dodderidge", imagen: "imágenes/daisyDodderidge.png", cromo: 99 },
  { nombre: "Harry Potter", imagen: "imágenes/harryPotter.png", cromo: 100 },
  { nombre: "Albus Dumbledore", imagen: "imágenes/albusDumbledore.png", cromo: 101 }
];

const cromosPriorizados = [
  'Merlin',
  'Herpo el loco',
  'Morgan le fay',
  'Newt Scamander',
  'Godric Gryffindor',
  'Salazar Slytherin',
  'Helga Hufflepuff',
  'Rowena Ravenclaw',
  'Harry Potter',
  'Albus Dumbledore',
];

function buscarMiniInfo(nombre) {
  return miniInfoLista[nombre] || null;
}

function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function elegirCromoDestacado(cromosMostrados, cromosPriorizados) {
  const normalizadosPriorizados = cromosPriorizados.map(normalizarTexto);

  const candidatosPriorizados = cromosMostrados.filter(nombre =>
    normalizadosPriorizados.includes(normalizarTexto(nombre))
  );

  if (candidatosPriorizados.length === 0) {
    return null; // ❌ No hay destacado
  }

  const elegido = candidatosPriorizados[Math.floor(Math.random() * candidatosPriorizados.length)];
  return elegido;
}


const lista = document.querySelector(".lista-con-scroll ol");

personajes.forEach(p => {
  const li = document.createElement("li");
  li.classList.add("personaje");
  li.innerHTML = `
    ${p.nombre}
    <img src="${p.imagen}" alt="${p.nombre}" class="icono">
  `;
  lista.appendChild(li);

});

function obtenerNombresAleatorios(arr, n) {
  const copia = [...arr];
  const resultado = [];

  for (let i = 0; i < n && copia.length > 0; i++) {
    const idx = Math.floor(Math.random() * copia.length);
    resultado.push(copia.splice(idx, 1)[0]);
  }

  return resultado;
}

function mostrarNombresAleatorios() {
  personajeDestacadoGlobal = null;
  miniInfoGlobal = null;

  const infoContainer = document.getElementById("mini-info-destacada");
  if (infoContainer) {
    infoContainer.innerHTML = "";
    infoContainer.style.display = "none";
  }
  const n = parseInt(selectCant.value, 10);
  const seleccionados = obtenerNombresAleatorios(personajes, n);

  document.getElementById("vista-inicial").style.display = "none";

  const contenedorPrincipal = document.getElementById("resultados");
  contenedorPrincipal.style.display = "flex";

  contenedorPrincipal.classList.add("fade-in");

  const contenedor = document.getElementById("contenedor-tarjetas");
  contenedor.innerHTML = "";

  const layout = `layout-${seleccionados.length}`;
  contenedor.className = `${layout}`;

  if (seleccionados.length === 0) {
    contenedor.textContent = "No quedan personajes disponibles.";
    return;
  }

  seleccionados.forEach(p => {
    const div = document.createElement("div");
    div.className = "tarjeta-personaje ganador fade-in";
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="icono">
      <p>${p.nombre}</p>
    `;
    contenedor.appendChild(div);
  }); 

  seleccionados.forEach(p => {
    const nombre = `Cromo 》 ${p.nombre}`;
    const ahora = new Date().toISOString();
    const nuevoCromo = { nombre, timestamp: ahora };

    const historialPrevio = JSON.parse(localStorage.getItem("historialCromos")) || [];
    historialPrevio.push(nuevoCromo);

    localStorage.setItem("historialCromos", JSON.stringify(historialPrevio));
  });

  const nombresSeleccionados = seleccionados.map(p => p.nombre);
  const destacadoVisual = elegirCromoDestacado(nombresSeleccionados, cromosPriorizados);
  let personajeParaMiniInfo = destacadoVisual;
  
  if (!personajeParaMiniInfo) {
    personajeParaMiniInfo = nombresSeleccionados[Math.floor(Math.random() * nombresSeleccionados.length)];
  }

  const tarjetas = document.querySelectorAll(".tarjeta-personaje");
  tarjetas.forEach(t => {
    t.classList.remove("destacado"); // limpiar antes
  });

  if (destacadoVisual) {
    tarjetas.forEach(t => {
      const nombre = t.querySelector("p")?.textContent?.trim();
      if (normalizarTexto(nombre) === normalizarTexto(destacadoVisual)) {
        t.classList.add("destacado");
      }
    });
  }

  const miniInfo = buscarMiniInfo(personajeParaMiniInfo);

  personajeDestacadoGlobal = personajeParaMiniInfo;
  miniInfoGlobal = miniInfo;

  if (miniInfo && infoContainer) {
    infoContainer.innerHTML = `<strong>${personajeParaMiniInfo}:</strong> ${miniInfo}`;
    infoContainer.style.display = "block";
  }

document.getElementById("resultados").style.display = "block";
document.getElementById("vista-inicial").style.display = "none";
}

document.getElementById("volver").addEventListener("click", () => {
  document.getElementById("resultados").style.display = "none";
  document.getElementById("vista-inicial").style.display = "block";
});


document.getElementById("copiar").addEventListener("click", () => {
  const seleccionados = document.querySelectorAll(".tarjeta-personaje p");
  const personajesTexto = Array.from(seleccionados).map((p) => {
    const nombre = p.textContent.trim();

    const personajeReal = personajes.find(obj => normalizarTexto(obj.nombre) === normalizarTexto(nombre));
    const numero = personajeReal?.cromo ?? "¿?";

    return `Cromo N°${numero} 》 ${nombre}.`;
  });

const personajeDestacado = personajeDestacadoGlobal || "Sin personaje";
const miniInfo = miniInfoGlobal || "Sin información disponible";

const textoFinal = `
⋆ — — — — — — ✧ 🍫 ✧ — — — — — — ⋆

ㅤ ㅤ *⊱• RANAS CHOCOLATE •⊰*

${personajesTexto.map(linea => `✦ *${linea.replace("Cromo N°", "CROMO №").replace("》", "᎓")}*`).join("\n\n")}

⟩ ${personajeDestacado}: ${miniInfo}

▸ @
⋆ — — — — — — ✧ 🐸 ✧ — — — — — — ⋆
`.trim();
  navigator.clipboard.writeText(textoFinal)
  .then(() => {
    mostrarMensajeCopiado();
  })
  .catch(err => console.error("Error al copiar:", err));
});

document.getElementById("verHistorial").addEventListener("click", () => {
  const historial = document.getElementById("historial");
  const listaHistorial = document.getElementById("lista-historial");
  listaHistorial.innerHTML = "";

  const ahora = new Date();
  const limite = 30 * 60 * 60 * 1000;

  const historialCompleto = JSON.parse(localStorage.getItem("historialCromos")) || [];

  const recientes = historialCompleto.filter(cromo => {
    return ahora - new Date(cromo.timestamp) <= limite;
  });

  if (recientes.length === 0) {
    listaHistorial.innerHTML = "<p>No hay aperturas en las últimas 30 horas 🕰️</p>";
  } else {
    recientes.forEach((cromo, index) => {
      const item = document.createElement("div");
      const fecha = new Date(cromo.timestamp);
      item.textContent = `${index + 1}. ${cromo.nombre} — ${fecha.toLocaleString()}`;
      listaHistorial.appendChild(item);
    });

    // 🪄 Auto-scroll al final
    listaHistorial.scrollTop = listaHistorial.scrollHeight;
  }

  historial.style.display = "block";
});



function mostrarMensajeCopiado() {
  let mensaje = document.getElementById("mensaje-copiado");
  if (!mensaje) {
    mensaje = document.createElement("div");
    mensaje.id = "mensaje-copiado";
    mensaje.textContent = "¡Cromo copiado!";
    document.body.appendChild(mensaje);
  }
  mensaje.style.animation = "none";
  // Forzar reflow para reiniciar animación
  void mensaje.offsetWidth;
  mensaje.style.animation = "aparecer-copiado 1.2s ease forwards";

  // Opcional: partículas mágicas
  for (let i = 0; i < 12; i++) {
    const particula = document.createElement("span");
    particula.className = "particula";
    particula.style.left = (50 + Math.random() * 100 - 50) + "px";
    particula.style.top = (20 + Math.random() * 40 - 20) + "px";
    mensaje.appendChild(particula);
    setTimeout(() => particula.remove(), 800);
  }
  setTimeout(() => { mensaje.style.animation = "none"; }, 1300);
}