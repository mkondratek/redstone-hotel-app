package com.example.redstonehotelapp.model;

import com.example.redstonehotelapp.dto.Reservation;

public interface RoomAvailabilityValidator {
    String ROOM_UNAVAILABLE = "ROOM_UNAVAILABLE";

    boolean validate(Iterable<Reservation> rooms, Reservation requestedReservation);
}
