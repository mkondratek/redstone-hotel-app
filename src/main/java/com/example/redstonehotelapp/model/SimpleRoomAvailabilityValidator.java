package com.example.redstonehotelapp.model;

import com.example.redstonehotelapp.dto.Reservation;
import org.springframework.stereotype.Component;

import java.util.stream.StreamSupport;

@Component
public class SimpleRoomAvailabilityValidator implements RoomAvailabilityValidator {

    @Override
    public boolean validate(Iterable<Reservation> rooms, Reservation requestedReservation) {
        return StreamSupport.stream(rooms.spliterator(), true)
                .filter(r -> r.getRoomId().equals(requestedReservation.getRoomId()))
                .filter(r -> r.getToDate().compareTo(requestedReservation.getFromDate()) >= 0)
                .filter(r -> r.getFromDate().compareTo(requestedReservation.getToDate()) <= 0)
                .findFirst().isEmpty();
    }
}
