// ## Características

// - Contador de visitas persistente utilizando `localStorage`.
// - Botón de "Reestablecer Contador" para reiniciar el contador a cero.

// ## Uso (Instrucciones)

// 1. Abre el archivo `index.html` en tu navegador.
// 2. Cada vez que se recarga la página debe añadir una visita más
// 3. Debe persistir el número aunque se cierre el navegador
// 4. Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
// 5. Toda la lógica tiene que estar en `script.js`


// datos del indezx
// <section class="container">
//     <div class="content">
//     <h1>WELCOME</h1>
//     <p>Esta página ha sido visitada <span id="contadorVisitas">0</span> veces.</p>
//     <button id="btnReestablecer">Reestablecer Contador</button>
//     </div>
//   </section>

// let numVisitaw;


// localStorage.setItem("contador",0)
//  console.log("entrada 0",localStorage.getItem("contador"))
//  if (localStorage.getItem("contador")=== 0){
// let contador =contador+1
// localStorage.setItem("contador",contador)
// console.log("seria la primera",localStorage.getItem("contador"))

// // const sumador1 = (localStorage.getItem("contador"));
// // sumadorcont0 =sumadorcont0+1
//  }
//  else {
    
//  let sumadorcont =(localStorage.getItem("contador"));
//  sumadorcont = sumadorcont+1;
//  localStorage.setItem("contador",sumadorcont)
//  console.log("varias",localStorage.getItem("contador"))

// }

//^+`+`+`+`+`+``+`+`+`+`+`+`+`+`+`+`2 intento

// HICIMO ON LOcalstorage.clear(); POR QUE ESTABA DANDO ERROR CON LO DE ARRIBA!!!!!!
let Nvisitas
console.log("aqui nvisitas es undefined:",Nvisitas)
const KEY = "contador";
console.log(localStorage.getItem(KEY))
// vale ahora trabajaremos con que localStorage.getItem(KEY) da null
if (localStorage.getItem(KEY)=== null){
    Nvisitas = 1
localStorage.setItem(KEY,String(Nvisitas))
console.log("esta es la primera entrada AQUI NVISITAS VALE 1::>",Nvisitas)
}
 else {
    // convertir string a número
    let n = parseInt(raw, 10);

    // manejar errores por si algo falló
    if (Number.isNaN(n)) {
        n = 0;
    }

    visitas = n + 1;
    localStorage.setItem(KEY, String(visitas));
    console.log("Visita número:", visitas);
}