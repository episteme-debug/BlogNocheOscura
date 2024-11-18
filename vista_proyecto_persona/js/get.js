async function getPersona(params) {
    try {
        var respuesta = await fetch("http://localhost:8080/getPersonas", {
            method: 'GET'
        })

        var cuerpoRespuesta = await respuesta.json();

        if (respuesta.ok == true) {
            console.log("La solicitud ha sido aceptada con éxito : " + JSON.stringify(cuerpoRespuesta));
            await llenarTabla(cuerpoRespuesta);
            return cuerpoRespuesta;

        } else {
            throw new Error(respuesta.status + cuerpoRespuesta);

        }
    } catch (error) {
        console.log("Hubo inconvenientes con la solicitud : " + error)
    }
}

function llenarTabla(cuerpoRespuesta) {
    var tabla_personas = $(".table_objects_get_tbody");
    var td = $("<td></td>");

    var tamaño_lista = cuerpoRespuesta.length;
    for (var i = 0; i < tamaño_lista; i++) {
        tabla_personas.append( `
            <tr>
                <td>${cuerpoRespuesta[i].codigo}</td>
                <td>${cuerpoRespuesta[i].nombre}</td>
                <td>${cuerpoRespuesta[i].apellido}</td>
                <td>${cuerpoRespuesta[i].fechaNacimiento}</td>
                <td>${cuerpoRespuesta[i].email}</td>
                <td>${cuerpoRespuesta[i].password}</td>
            </tr>

        `)
    }
}

getPersona();