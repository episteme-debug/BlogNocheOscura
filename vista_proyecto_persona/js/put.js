$(document).ready(function () {

    var documento_objeto;
    var nombre_objeto;
    var apellido_objeto;
    var email_objeto;
    var password_objeto;
    var fecha_nac_objeto;
    var objeto_json;

    function constructor(params) {
        documento_objeto = $("#documento").val();
        nombre_objeto = $("#nombre").val();
        apellido_objeto = $("#apellido").val();
        fecha_nac_objeto = $("#fec_nac").val();
        email_objeto = $("#email").val();
        password_objeto = $("#contrasena").val();
        objeto_json = {};

    }

    $(".btn_actualizar").click(function () {
        constructor();
        if (comprobarValidezInput() == false) {
            alert("¡Recuerda querido usuario que los campos no pueden estar vacíos!");
        } else {
            alert("Ingresos válidos");
        }
        putPersona();
        vaciarInputs();
    });

    function comprobarValidezInput() {
        var esValido = true;

        if (nombre_objeto  == "" || apellido_objeto  == "" || fecha_nac_objeto  == "" || email_objeto  == "" || password_objeto == "" ) {
            esValido = false;
        }

        return esValido;
    }

    async function putPersona(params) {

        try{
            var respuestaSolicitud = await fetch("http://localhost:8080/Actualizar", {
                method : 'PATCH',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(
                    validarCheckBox()

                )
            });

            var cuerpoRespuesta = await respuestaSolicitud.json();

            if(respuestaSolicitud.ok == true){
                alert("La solicitud ha sido aceptada con éxito : ");
                console.log(JSON.stringify(cuerpoRespuesta));

            }else{
                throw new Error(cuerpoRespuesta.status + cuerpoRespuesta);

            }

        }catch(error){
            alert("Hubo inconvenientes con la solicitud");
            console.log(error);
        }
    }

    function validarCheckBox(){
        if(!documento_objeto == false){
            objeto_json.documento = documento_objeto;
        }

        if(!nombre_objeto == false){
            objeto_json.nombre = nombre_objeto;

        }

        if(!apellido_objeto == false){
            objeto_json.apellido = apellido_objeto;

        }

        if(!fecha_nac_objeto == false){
            objeto_json.fechaNacimiento = fecha_nac_objeto;

        }

        if(!email_objeto == false){
            objeto_json.email = email_objeto;

        }

        if(!apellido_objeto == false){
            objeto_json.apellido = apellido_objeto;

        }

        if(!password_objeto == false){
            objeto_json.contrasena = password_objeto;
        }

        console.log(JSON.stringify(objeto_json))
        return objeto_json;
    }


    function vaciarInputs(){
        $("#documento").val("");
        $("#nombre").val("");
        $("#apellido").val("");
        $("#fec_nac").val("");
        $("#email").val("");
        $("#contrasena").val("");
    }
})