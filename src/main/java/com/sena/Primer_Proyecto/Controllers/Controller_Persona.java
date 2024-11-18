package com.sena.Primer_Proyecto.Controllers;

import com.sena.Primer_Proyecto.DTO.logInDTO;
import com.sena.Primer_Proyecto.Entity.*;
import com.sena.Primer_Proyecto.Messages.logInMessage;
import com.sena.Primer_Proyecto.Services.Servicio_Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://127.0.0.1:5501/")
@RestController
public class Controller_Persona {

    @Autowired
    Servicio_Persona servicio;

    //Get List Personas
    @GetMapping("/getPersonas")
    public List<Persona> getPersona() {
        return servicio.getAllListaPersona();
    }

    //Get Persona by Id
    @GetMapping("/getPersonaById/{cod}")
    public Optional<Persona> getPersonaBYId(@PathVariable Integer cod){
        return servicio.getPersonaById(cod);
    }

    //Create a Persona
    @PostMapping("/savePersona")
    public Persona savePersona(@RequestBody Persona objeto) {
        return servicio.savePersona(objeto);
    }

    //Update a Persoma
    @PatchMapping("/updatePersona/{cod}")
    public Persona actualizarPersona(
            @PathVariable Integer cod,
            @RequestBody Persona objeto) {
        return servicio.updatePersona(cod, objeto);
    }

    //Dalete a Persona By Id
    @DeleteMapping("/deleteById/{cod}")
    public void eliminarPersona(
            @PathVariable Integer cod
    ) {
        servicio.deletePersona(cod);
    }

    //LogIn a Persona By Email and Password
    @PostMapping("/logIn")
    public logInMessage logInPersona(@RequestBody logInDTO dataPersona){
        return servicio.logInPersona(dataPersona);
    }
}
