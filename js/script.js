// ## Características

// - Contador de visitas persistente utilizando `localStorage`.
// - Botón de "Reestablecer Contador" para reiniciar el contador a cero.

// ## Uso (Instrucciones)

// 1. Abre el archivo `index.html` en tu navegador.
// 2. Cada vez que se recarga la página debe añadir una visita más
// 3. Debe persistir el número aunque se cierre el navegador
// 4. Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
// 5. Toda la lógica tiene que estar en `script.js`


// 1- capturar botones
// 2- guardar todo en el data storage-
// 3 - cada ves que refresquemoos se ++1 em ContentVisibilityAutoStateChangeEvent
// 4 -boton restableser
 const btnRestablecer = document.getElementById("btnReestablecer")
 const contadorVisitas = document.getElementById("contadorVisitas")

const damecontador=() => localStorage.getItem("contador" ) || 0 
const colocarcontador=(visitas)=>localStorage.setItem("contador",visitas)
console.log("aqui vemos que tiene contaDOR" ,localStorage.contador)

let sumadorvisitas = damecontador()





 // aqui metemos el contador en elemento =contadorvisitas
 const metercortador =() =>{
    colocarcontador(sumadorvisitas)
    contadorVisitas.textContent = sumadorvisitas
 }

  sumadorvisitas++;
  // USAMOS LA FUNCION DE METERLA EN EL CONTADOR
  metercortador()

  btnRestablecer.addEventListener("click",()=>{
    localStorage.setItem("contador",0)
    contadorVisitas.textContent= localStorage.getItem("contador")
  })
