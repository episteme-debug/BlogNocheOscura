package com.sena.Primer_Proyecto.Messages;

import com.sena.Primer_Proyecto.Entity.*;

public class logInMessage {
    String mensaje;
    int error;
    Persona persona;

    public logInMessage() {
    }

    public logInMessage(String mensaje, int error, Persona persona) {
        this.mensaje = mensaje;
        this.error = error;
        this.persona = persona;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public int getError() {
        return error;
    }

    public void setError(int error) {
        this.error = error;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    @Override
    public String toString() {
        return "logInMessage{" +
                "mensaje='" + mensaje + '\'' +
                ", error=" + error +
                ", persona=" + persona +
                '}';
    }
}
