package com.sena.Primer_Proyecto.DTO;

public class logInDTO {
    String email;
    String password;

    public logInDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public logInDTO() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "logInDTO{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
