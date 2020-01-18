package com.example.redstonehotelapp.controller;

import com.example.redstonehotelapp.dto.Reservation;
import com.example.redstonehotelapp.dto.ReservationRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ReservationController {

    final ReservationRepository repository;

    public ReservationController(ReservationRepository repository) {
        this.repository = repository;
    }

    @PostMapping(value = "/reservation")
    public ResponseEntity<HttpStatus> postReservation(@RequestBody Reservation reservation) {
        repository.save(reservation);
        return ResponseEntity.ok(HttpStatus.CREATED);
    }

    @GetMapping(value = "/reservation")
    public Iterable<Reservation> getReservation() {
        return repository.findAll();
    }
}
