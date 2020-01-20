package com.example.redstonehotelapp.controller;

import com.example.redstonehotelapp.dto.Reservation;
import com.example.redstonehotelapp.dto.ReservationRepository;
import com.example.redstonehotelapp.model.RoomAvailabilityValidator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReservationController {

    final ReservationRepository repository;

    final RoomAvailabilityValidator roomAvailabilityValidator;

    public ReservationController(ReservationRepository repository, RoomAvailabilityValidator roomAvailabilityValidator) {
        this.repository = repository;
        this.roomAvailabilityValidator = roomAvailabilityValidator;
    }

    @PostMapping("/reservation")
    public ResponseEntity postReservation(@RequestBody Reservation reservation) {
        boolean isRoomAvailable = roomAvailabilityValidator.validate(repository.findAll(), reservation);
        if (isRoomAvailable) {
            repository.save(reservation);
            return ResponseEntity.ok(HttpStatus.CREATED);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(RoomAvailabilityValidator.ROOM_UNAVAILABLE);
        }
    }

    @GetMapping("/reservation")
    public Iterable<Reservation> getReservation() {
        return repository.findAll();
    }
}
