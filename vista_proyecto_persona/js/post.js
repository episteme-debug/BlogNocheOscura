$(document).ready(function () {

    var nombre_objeto;
    var apellido_objeto;
    var email_objeto;
    var password_objeto;
    var fecha_nac_objeto;

    function constructor(params) {
        nombre_objeto = $(".input_nombre").val();
        apellido_objeto = $(".input_apellido").val();
        fecha_nac_objeto = $(".input_fecha_nac").val();
        email_objeto = $(".input_email").val();
        password_objeto = $(".input_password").val();
    }

    $(".btn_registro").click(function () {
        constructor();
        if (comprobarValidezInput() == false) {
            alert("Todos los campos son obligatorios");

        } else {
            console.log("Ingresos válidos")
            console.log(
                nombre_objeto,
                apellido_objeto,
                fecha_nac_objeto,
                email_objeto,
                password_objeto
            );
            postPersona();
            vaciarInputs();
        }
    });

    function comprobarValidezInput() {
        var esValido = true;

        if (!nombre_objeto || !apellido_objeto || !fecha_nac_objeto || !email_objeto || !password_objeto) {
            esValido = false;
        }
        return esValido;
    }

    async function postPersona(params) {

        try{
            var respuestaSolicitud = await fetch("http://localhost:8080/savePersona", {
                method : 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre_objeto,
                    apellido: apellido_objeto,
                    fechaNacimiento: fecha_nac_objeto,
                    email: email_objeto,
                    password: password_objeto

                })
            });

            var cuerpoRespuesta = await respuestaSolicitud.json();

            if(respuestaSolicitud.ok == true){
                console.log("La solicitud ha sido aceptada con éxito : ");
                alert("Registro Exitoso");
                console.log(JSON.stringify(cuerpoRespuesta));

            }else{
                throw new Error(cuerpoRespuesta.status + cuerpoRespuesta);

            }

        }catch(error){
            alert("Hubo inconvenientes con la solicitud");
            console.log(error);
        }
    }

    function vaciarInputs(){
        $(".input_nombre").val("");
        $(".input_apellido").val("");
        $(".input_fecha_nac").val("");
        $(".input_email").val("");
        $(".input_password").val("");
    }

})