const selectCant = document.getElementById('opc');
let personajeDestacadoGlobal = null;
let miniInfoGlobal = null;

const firebaseConfig = {
  apiKey: "AIzaSyDBCHw95o171WTTvODedUzSScIrl0dnm1I",
  authDomain: "cromos-interactivos.firebaseapp.com",
  projectId: "cromos-interactivos",
  storageBucket: "cromos-interactivos.appspot.com",
  messagingSenderId: "573757659863",
  appId: "1:573757659863:web:ad4606b66a19b1e6b16e92",
  measurementId: "G-G8TTF3KPYJ"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const personajes = [
  { nombre: "Merlin", imagen: "imagenes/Merlin.png", cromo: 1 },
  { nombre: "Cornelius Agripa", imagen: "imagenes/CorneliusAgripa.png", cromo: 2 },
  { nombre: "Elfrida Clagg", imagen: "imagenes/ElfridaClagg.png", cromo: 3 },
  { nombre: "Grogan Stump", imagen: "imagenes/GroganStump.png", cromo: 4 },
  { nombre: "Gulliver Pokeby", imagen: "imagenes/GulliverPokeby.png", cromo: 5 },
  { nombre: "Glanmore Peakes", imagen: "imagenes/GlanmorePeakes.png", cromo: 6 },
  { nombre: "Hesper Starkey", imagen: "imagenes/HesperStarkey.png", cromo: 7 },
  { nombre: "Derwent Shimpling", imagen: "imagenes/DerwentShimpling.png", cromo: 8 },
  { nombre: "Gunhilda De Gorsemoor", imagen: "imagenes/GunhildaDeGorsemoor.png", cromo: 9 },
  { nombre: "Muldoon Burdock", imagen: "imagenes/muldoonBurdock.png", cromo: 10 },
  { nombre: "Herpo el Loco", imagen: "imagenes/herpoElLoco.png", cromo: 11 },
  { nombre: "El Malicioso Merwyn", imagen: "imagenes/elMaliciosoMerwyn.png", cromo: 12 },
  { nombre: "El Invencible Andros", imagen: "imagenes/elInvencibleAndros.png", cromo: 13 },
  { nombre: "El Miedoso Fulbert", imagen: "imagenes/elMiedosoFulbert.png", cromo: 14 },
  { nombre: "Paracelso", imagen: "imagenes/Paracelso.png", cromo: 15 },
  { nombre: "Cliodna", imagen: "imagenes/cliodna.png", cromo: 16 },
  { nombre: "Morgan le Fay", imagen: "imagenes/morganLeFay.png", cromo: 17 },
  { nombre: "Uric el Chiflado", imagen: "imagenes/uricElChiflado.png", cromo: 18 },
  { nombre: "Newt Scamander", imagen: "imagenes/newtScamander.png", cromo: 19 },
  { nombre: "La Rara Wendelin", imagen: "imagenes/laRaraWendelin.png", cromo: 20 },
  { nombre: "Lord Stoddard Withers", imagen: "imagenes/lordStoddardWithers.png", cromo: 21 },
  { nombre: "Circe", imagen: "imagenes/Circe.png", cromo: 22 },
  { nombre: "Glenda Chittok", imagen: "imagenes/glendaChittok.png", cromo: 23 },
  { nombre: "Adalbert Waffling", imagen: "imagenes/adalbertWaffling.png", cromo: 24 },
  { nombre: "Perpetua Fancourt", imagen: "imagenes/perpetuaFancourt.png", cromo: 25 },
  { nombre: "Almerick Sawbridge", imagen: "imagenes/almerikSawbridge.png", cromo: 26 },
  { nombre: "Mirabella Plunkett", imagen: "imagenes/mirabellaPlunkett.png", cromo: 27 },
  { nombre: "Tilly Toke", imagen: "imagenes/tillyToke.png", cromo: 28 },
  { nombre: "Archibald Alderton", imagen: "imagenes/archibaldAlderton.png", cromo: 29 },
  { nombre: "Artemisa Lufkin", imagen: "imagenes/artemisaLufkin.png", cromo: 30 },
  { nombre: "Balfour Blane", imagen: "imagenes/balfourBlane.png", cromo: 31 },
  { nombre: "Bridget Wenlock", imagen: "imagenes/bridgetWenlock.png", cromo: 32 },
  { nombre: "Beaumont Majoribanks", imagen: "imagenes/beaumontMajoribanks.png", cromo: 33 },
  { nombre: "Donaghan Tremlett", imagen: "imagenes/donaghanTremlett.png", cromo: 34 },
  { nombre: "Bowman Wright", imagen: "imagenes/bowmanWright.png", cromo: 35 },
  { nombre: "Jocelind Wadcock", imagen: "imagenes/jocelindWadcock.png", cromo: 36 },
  { nombre: "Cassandra Vablatsky", imagen: "imagenes/cassandraVablatsky.png", cromo: 37 },
  { nombre: "Chauncey Oldridge", imagen: "imagenes/chaunceyOldridge.png", cromo: 38 },
  { nombre: "Gwenog Jones", imagen: "imagenes/gwenogJones.png", cromo: 39 },
  { nombre: "Carlotta Pinkstone", imagen: "imagenes/carlottaPinkstone.png", cromo: 40 },
  { nombre: "Godric Gryffindor", imagen: "imagenes/godricGryffindor.png", cromo: 41 },
  { nombre: "Crispin Cronk", imagen: "imagenes/crispinCronk.png", cromo: 42 },
  { nombre: "Cyprian Youdle", imagen: "imagenes/cyprianYoudle.png", cromo: 43 },
  { nombre: "Devlin Whitehorn", imagen: "imagenes/devlinWhitehorn.png", cromo: 44 },
  { nombre: "Dunbar Oglethorpe", imagen: "imagenes/dunbarOglethorpe.png", cromo: 45 },
  { nombre: "Miranda Goshawk", imagen: "imagenes/mirandaGoshawk.png", cromo: 46 },
  { nombre: "Edgar Stroulger", imagen: "imagenes/edgarStroulger.png", cromo: 47 },
  { nombre: "Salazar Slytherin", imagen: "imagenes/salazarSlytherin.png", cromo: 48 },
  { nombre: "Elladora Ketteridge", imagen: "imagenes/elladoraKetteridge.png", cromo: 49 },
  { nombre: "Musidora Barkwith", imagen: "imagenes/musidoraBarkwith.png", cromo: 50 },
  { nombre: "Ethelred el Siempre Listo", imagen: "imagenes/ethelredElSiempreListo.png", cromo: 51 },
  { nombre: "Felix Summerbee", imagen: "imagenes/felixSummerbee.png", cromo: 52 },
  { nombre: "Gretha Catchlove", imagen: "imagenes/grethaCatchlove.png", cromo: 53 },
  { nombre: "Gaspard Shingleton", imagen: "imagenes/gaspardShingleton.png", cromo: 54 },
  { nombre: "Honoria Nutcombe", imagen: "imagenes/honoriaNutcombe.png", cromo: 55 },
  { nombre: "Gideon Crumb", imagen: "imagenes/gideonCrumb.png", cromo: 56 },
  { nombre: "Gifford Ollerton", imagen: "imagenes/giffordOllerton.png", cromo: 57 },
  { nombre: "Glover Hipworth", imagen: "imagenes/gloverHipworth.png", cromo: 58 },
  { nombre: "Gregory el Adulador", imagen: "imagenes/gregoryElAdulador.png", cromo: 59 },
  { nombre: "Laverne de Montmorency", imagen: "imagenes/laverneDeMontmorency.png", cromo: 60 },
  { nombre: "Havelock Sweeting", imagen: "imagenes/havelockSweeting.png", cromo: 61 },
  { nombre: "Ignatia Wildsmith", imagen: "imagenes/ignatiaWildsmith.png", cromo: 62 },
  { nombre: "Herman Wintringham", imagen: "imagenes/hermanWintringham.png", cromo: 63 },
  { nombre: "Jocunda Sykes", imagen: "imagenes/jocundaSykes.png", cromo: 64 },
  { nombre: "Gondoline Oliphant", imagen: "imagenes/gondolineOliphant.png", cromo: 65 },
  { nombre: "Flavius Belby", imagen: "imagenes/flaviusBelby.png", cromo: 66 },
  { nombre: "Justus Pilliwickle", imagen: "imagenes/justusPilliwickle.png", cromo: 67 },
  { nombre: "Kirley Duke McCormack", imagen: "imagenes/kirleyDukeMcCormack.png", cromo: 68 },
  { nombre: "Bertie Bott", imagen: "imagenes/bertieBott.png", cromo: 69 },
  { nombre: "Leopoldina Smethwyck", imagen: "imagenes/leopoldinaSmethwyck.png", cromo: 70 },
  { nombre: "Maeva Queen", imagen: "imagenes/maevaQueen.png", cromo: 71 },
  { nombre: "Helga Hufflepuff", imagen: "imagenes/helgaHufflepuff.png", cromo: 72 },
  { nombre: "Mopsus", imagen: "imagenes/mopsus.png", cromo: 73 },
  { nombre: "Montague Knightly", imagen: "imagenes/montagueKnightly.png", cromo: 74 },
  { nombre: "Mungo Bonham", imagen: "imagenes/mungoBonham.png", cromo: 75 },
  { nombre: "Myron Wagtail", imagen: "imagenes/myronWagtail.png", cromo: 76 },
  { nombre: "Norvel Twonk", imagen: "imagenes/norvelTwonk.png", cromo: 77 },
  { nombre: "Orsino Thruston", imagen: "imagenes/orsinoThruston.png", cromo: 78 },
  { nombre: "Oswald Beamish", imagen: "imagenes/oswaldBeamish.png", cromo: 79 },
  { nombre: "Beatrix Bloxman", imagen: "imagenes/beatrixBloxman.png", cromo: 80 },
  { nombre: "Quong Po", imagen: "imagenes/QuongPo.png", cromo: 81 },
  { nombre: "Rowena Ravenclaw", imagen: "imagenes/rowenaRavenclaw.png", cromo: 82 },
  { nombre: "Roderick Plumpton", imagen: "imagenes/roderickPlumpton.png", cromo: 83 },
  { nombre: "Roland Kegg", imagen: "imagenes/rolandKegg.png", cromo: 84 },
  { nombre: "Blemhein Stalk", imagen: "imagenes/blemheinStalk.png", cromo: 85 },
  { nombre: "Dorcas Wellbeloved", imagen: "imagenes/dorcasWellbeloved.png", cromo: 86 },
  { nombre: "Taddeus Thurkell", imagen: "imagenes/taddeusThurkell.png", cromo: 87 },
  { nombre: "Celestina Warbeck", imagen: "imagenes/celestinaWarbeck.png", cromo: 88 },
  { nombre: "Alberta Toothill", imagen: "imagenes/albertaToothill.png", cromo: 89 },
  { nombre: "Sacharissa Tugwood", imagen: "imagenes/sacharissaTugwood.png", cromo: 90 },
  { nombre: "Wilfred Elphick", imagen: "imagenes/wilfredElphick.png", cromo: 91 },
  { nombre: "Xavier Rastrick", imagen: "imagenes/xavierRastrick.png", cromo: 92 },
  { nombre: "Heathcote Barbary", imagen: "imagenes/heathcoteBarbary.png", cromo: 93 },
  { nombre: "Merton Graves", imagen: "imagenes/mertonGraves.png", cromo: 94 },
  { nombre: "Yardley Platt", imagen: "imagenes/yardleyPlatt.png", cromo: 95 },
  { nombre: "Hengist De Woodcroft", imagen: "imagenes/hengistDeWoodcroft.png", cromo: 96 },
  { nombre: "Alberic Grunnion", imagen: "imagenes/albericGrunnion.png", cromo: 97 },
  { nombre: "Dymphna Furmage", imagen: "imagenes/dymphnaFurmage.png", cromo: 98 },
  { nombre: "Daisy Dodderidge", imagen: "imagenes/daisyDodderidge.png", cromo: 99 },
  { nombre: "Harry Potter", imagen: "imagenes/harryPotter.png", cromo: 100 },
  { nombre: "Albus Dumbledore", imagen: "imagenes/albusDumbledore.png", cromo: 101 }
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

function generarPoolConPeso(personajes, priorizados) {
  const pool = [];

  personajes.forEach(p => {
    const esPriorizado = priorizados.some(nombre => normalizarTexto(nombre) === normalizarTexto(p.nombre));
    const peso = esPriorizado ? 1 : 15;
    for (let i = 0; i < peso; i++) {
      pool.push(p);
    }
  });

  return pool;
} 

function guardarCromoGlobal(cromo) {
  db.collection("historialCromos").add(cromo)
    .then(() => console.log("Cromo guardado en Firestore"))
    .catch(error => console.error("Error al guardar en Firebase:", error));
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
    const pool = generarPoolConPeso(personajes, cromosPriorizados);
    const seleccionados = obtenerNombresAleatorios(pool, n);
    //const seleccionados = obtenerNombresAleatorios(personajes, n);

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

    guardarCromoGlobal(nuevoCromo);
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
  const limite = 30 * 60 * 60 * 1000; // 30 horas

  db.collection("historialCromos")
    .orderBy("timestamp", "desc")
    .get()
    .then(snapshot => {
      const recientes = snapshot.docs
        .map(doc => doc.data())
        .filter(cromo => ahora - new Date(cromo.timestamp) <= limite);

      if (recientes.length === 0) {
        listaHistorial.innerHTML = "<p>No hay aperturas en las últimas 30 horas 🕰️</p>";
      } else {
        recientes.forEach((cromo, index) => {
          const nombreOriginal = cromo.nombre.replace("Cromo 》", "").trim();
          const personaje = personajes.find(p => normalizarTexto(p.nombre) === normalizarTexto(nombreOriginal));
          const numero = personaje?.cromo ?? "¿?";

          const fecha = new Date(cromo.timestamp).toLocaleString();
          const item = document.createElement("div");
          item.textContent = `${index + 1}. Cromo N°${numero} 》 ${nombreOriginal} — ${fecha}`;
          listaHistorial.appendChild(item);
        });

        listaHistorial.scrollTop = listaHistorial.scrollHeight;
      }

      historial.style.display = "block";
    })
    .catch(error => {
      console.error("Error al obtener historial desde Firebase:", error);
      listaHistorial.innerHTML = "<p>Error al cargar historial.</p>";
    });
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

