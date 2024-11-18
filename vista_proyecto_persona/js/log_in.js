$(document).ready(function name(params) {
    var log_in_email;
    var log_in_password;

    function constructor(params) {
        log_in_email = $(".log_in_email").val();
        log_in_password = $(".log_in_password").val();
    }

    $(".btn_log_in").click(function name(params) {
        constructor();

        if (comprobarValidezInput() == false) {
            alert("Querido usuario recuerda que no pueden haber campos vacíos");
        } else {
            console.log("Ingresos válidos");
            loginPersona();
        }
    })

    function comprobarValidezInput() {
        var esValido = true;

        if (!log_in_email || !log_in_password) {
            esValido = false;
        }
        return esValido;
    }

    async function loginPersona(params) {

        try {
            var respuestaSolicitud = await fetch("http://localhost:8080/logIn", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: log_in_email,
                    password: log_in_password
                })
            });

            var cuerpoRespuesta = await respuestaSolicitud.json();

            if (respuestaSolicitud.ok == true) {
                console.log("La solicitud ha sido aceptada con éxito : ");
                console.log(JSON.stringify(cuerpoRespuesta));
                alert(cuerpoRespuesta.mensaje);
                if(cuerpoRespuesta.error == 2){
                    createToast();
                }

            } else {
                throw new Error(cuerpoRespuesta.status + cuerpoRespuesta);

            }

        } catch (error) {
            alert("Hubo inconvenientes con la solicitud");
            console.log(error);
        }
    }

    function vaciarInputs() {
        $(".input_nombre").val("");
        $(".input_apellido").val("");
        $(".input_fecha_nac").val("");
        $(".input_email").val("");
        $(".input_password").val("");
    }
    const createToast = () => {
        const listToast = $(".container-toast");
        const toast = $("<div></div>").attr('class', 'toast toast-success show');
        const icon = $("<i></i>").attr('class', 'fa fa-check-circle toast-icon');
        const message = $("<div></div>").text("Inicio de Sesión Exitoso");
        const iconClose = $("<i></i>").attr('class', 'fa fa-close');
        toast.append(icon, message, iconClose);
        listToast.append(toast);

        $(".fa-close").click(function name(params) {
            toast.removeClass('show').addClass('hide').hide();
        })

        setTimeout(() => {
            toast.removeClass('show').addClass('hide').hide();
        }, 9000);
    }
})