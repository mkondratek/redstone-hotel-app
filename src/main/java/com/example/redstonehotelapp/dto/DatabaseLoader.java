package com.example.redstonehotelapp.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final ReservationRepository reservationRepository;
    private final RoomRepository roomRepository;

    @Autowired
    public DatabaseLoader(ReservationRepository reservationRepository, RoomRepository roomRepository) {
        this.reservationRepository = reservationRepository;
        this.roomRepository = roomRepository;
    }

    @Override
    public void run(String... strings) {
        roomRepository.save(new Room(1l, "Dirt", "Do you like dirt blocks and ladders? This one will suit you!"));
        roomRepository.save(new Room(2l, "Cobblestone", "Small but functional. For those who have no taste."));
        roomRepository.save(new Room(3l, "Iron", "Small, beautiful and comfortable. What more could you want?"));
        roomRepository.save(new Room(4l, "Diamond", "Huge, in style, great view, lots of amenities. It will definitely do the job!"));
    }
}
