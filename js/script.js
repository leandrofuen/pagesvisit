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




localStorage.setItem("contador",0)
 console.log("entrada 0",localStorage.getItem("contador"))
 if (localStorage.getItem("contador")=== 0){
let contador =contador+1
localStorage.setItem("contador",contador)
console.log("seria la primera",localStorage.getItem("contador"))

// const sumador1 = (localStorage.getItem("contador"));
// sumadorcont0 =sumadorcont0+1
 }
 else {
    
 let sumadorcont =(localStorage.getItem("contador"));
 sumadorcont = sumadorcont+1;
 localStorage.setItem("contador",sumadorcont)
 console.log("varias",localStorage.getItem("contador"))

}