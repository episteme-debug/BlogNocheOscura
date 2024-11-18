package com.sena.Primer_Proyecto.Repository;
import com.sena.Primer_Proyecto.Entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonaRepositorio extends JpaRepository<Persona, Integer> {
    Optional<Persona> findByEmail(String email);
}
