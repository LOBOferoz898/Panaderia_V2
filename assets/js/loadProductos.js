function loadProducts(){
        
        var direccionIP = window.location.hostname;
        var numeroPuerto = window.location.port;

        console.log(direccionIP);
        console.log(numeroPuerto);

        const url = 'http://'+direccionIP+':'+numeroPuerto+'/assets/data.json';

        //http://127.0.0.1:5500/assets/data.json  <= puerto del duoc
        
        const resp = fetch(url)
        .then((response) => {
            /* VALIDACIÓN RESPUESTA RECURSO */
            if (response.ok) {
                console.log("response.text: ", response.text);
                return response.text();
            } else {
                console.log("response.status: ", response.status);
                throw new Error(response.status);
            }
        })
        .then((data) => {
            /* LECTURA DE LA DATA JSON*/
            
            const objJson = JSON.parse(data);
            var targets = '';
            
            for (i = 0; i < objJson.length; i++ ) {
                targets = `${targets}
                    <div class="product-container" style="width: 18rem;">
                                <h3>${objJson[i].nombre}</h3>
                                <img src="${objJson[i].imagen}" class="img-productos card-img-top" alt="${objJson[i].alt}">
                                <div class="card-body">
                                    <p class="card-text">${objJson[i].ingredientes}</p>
                                       <h3>${objJson[i].precio}</h3>
                                        <button class="button-add" onclick="${objJson[i].funcion_atributos}">Agregar</button>
                                </div>
                            </div>
                            `;
                }
            var targetsHTML = document.getElementById("productos");
            
            targetsHTML.innerHTML = targets;    
        })
        .catch((err) => {
            /* CAPTURA DE ERRORES */
            console.error("ERROR: ", err.message);
        });    
}

loadProducts();

$("#checkout").removeClass("d-none");

$("#btn-hacer-pedido").on("click", function(){

    $("#Datos-pago").removeClass("d-none")

});

function DatosPago() {
    var casilla1 = document.getElementById("flexRadioDefault1");
    var casilla2 = document.getElementById("flexRadioDefault2");
    
    if (casilla1.checked) {
     

      $("#Datos-pago").removeClass("d-none")
     
    } else if (casilla2.checked) {

        $("#Datos-pago").addClass("d-none")

    }else  {

        console.log("No se esta imprimiendo nada")

    }


  }


$("#flexRadioDefault1").on("click",function(){

    DatosPago();


});

$("#flexRadioDefault2").on("click",function(){

    DatosPago();


});