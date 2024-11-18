package com.sena.Primer_Proyecto.Services;
import com.sena.Primer_Proyecto.DTO.*;
import com.sena.Primer_Proyecto.Entity.Persona;
import com.sena.Primer_Proyecto.Messages.logInMessage;
import com.sena.Primer_Proyecto.Repository.PersonaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class Servicio_Persona {

    @Autowired
    private PersonaRepositorio repositorio;

    //Get All Personas
    public List<Persona> getAllListaPersona() {
        return repositorio.findAll();
    }

    //Get Persona By Id
    public Optional<Persona> getPersonaById(Integer id){
        return repositorio.findById(id);
    }

    //Insert a Persona
    public Persona savePersona(Persona objeto) {
        return repositorio.save(objeto);
    }

    //Method to update a Persona
    public Persona updatePersona(Integer id, Persona objeto){
        //Save data's object in variables
        String nombre = objeto.getNombre();
        String apellido = objeto.getApellido();
        LocalDate fec_nac = objeto.getFechaNacimiento();
        String email = objeto.getEmail();
        String password = objeto.getPassword();

        //Check if Persona Exist in the db
        Optional<Persona> personaExiste = repositorio.findById(id);
        Persona persona;

        if(personaExiste.isPresent() == true){
            persona = personaExiste.get();

            if (nombre != null){
                persona.setNombre(nombre);
            }
            if (apellido != null){
                persona.setApellido(apellido);
            }
            if (fec_nac != null){
                persona.setFechaNacimiento(fec_nac);
            }
            if (email != null){
                persona.setEmail(email);
            }
            if (password != null){
                persona.setPassword(password);
            }
            return repositorio.save(persona);
        }else{
            persona = null;
            System.out.println("Persona with cod " + id + " not found");
        }

        return persona;
    }

    //Delete a persona by cod
    public void deletePersona(Integer cod) {
        repositorio.deleteById(cod);
    }

    //LogIn Persona
    public logInMessage logInPersona(logInDTO dataPersona){
        logInMessage dataMessage = new logInMessage();
        String email = dataPersona.getEmail();
        String password = dataPersona.getPassword();
        Optional<Persona> personaExiste = repositorio.findByEmail(email);
        if(personaExiste.isPresent()){
            Persona persona = personaExiste.get();
            if (persona.getPassword().equals(password)){
                //Ingresos correctos
                dataMessage.setMensaje("Inicio de Sesión exitoso!");
                dataMessage.setError(2);
                dataMessage.setPersona(persona);
                return dataMessage;
            }else {
                //Password incorrecta
                dataMessage.setMensaje("Contraseña Incorrecta." + " Por favor verifique sus datos.");
                dataMessage.setError(1);
                dataMessage.setPersona(null);
                return dataMessage;
            }
        }
        //Usuario no encontrado
        dataMessage.setMensaje("Email Incorrecto." + " Por favor verifique sus datos.");
        dataMessage.setError(0);
        dataMessage.setPersona(null);
        return dataMessage;
    }

}
