let nombre = document.querySelector("#campo-nombre");
let campoParcial1 = document.querySelector("#campo-parcial1");
let campoParcial2 = document.querySelector("#campo-parcial2");

let registrarA = document.querySelector("#boton-registrar");
let reiniciar = document.querySelector("#boton-reiniciar");

let tarjetas = document.querySelector("#lista-tarjetas");

registrarA.addEventListener("click", () => {
    const parcial1 = Number(campoParcial1.value);
    const parcial2 = Number(campoParcial2.value);
    const promedio = ((parcial1+parcial2)/2).toFixed(1);

    if(promedio>= 6.0){
    tarjetas.innerHTML+=`
        <div class = "tarjeta estado-positivo">
            <h3>${nombre.value}</h3>
            <p>Promedio: ${promedio}</p>
            <p>Estado: Aprobado</p>
    
        </div>
    `;
    }else{
        tarjetas.innerHTML+=`
            <div class = "tarjeta estado-alerta">
                <h3>${nombre.value}</h3>
                <p>Promedio: ${promedio}</p>
                <p>Estado: Reprobado</p>
        
            </div>
        `;
    }

    campoParcial1.value = "";
    campoParcial2.value = "";
    nombre.value = "";
});



reiniciar.addEventListener("click", ()=>{
    tarjetas.innerHTML = "";
});