package com.example.redstonehotelapp.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final ReservationRepository repository;

    @Autowired
    public DatabaseLoader(ReservationRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
//        this.repository.save(new Reservation("Tomasz", "Jestrzębski", LocalDate.now(), LocalDate.now(), "wyjazd służbowy", 0l));
    }
}
