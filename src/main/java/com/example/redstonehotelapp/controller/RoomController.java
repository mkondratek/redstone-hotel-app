package com.example.redstonehotelapp.controller;

import com.example.redstonehotelapp.dto.Room;
import com.example.redstonehotelapp.dto.RoomRepository;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/room")
public class RoomController {

    final RoomRepository repository;

    public RoomController(RoomRepository repository) {
        this.repository = repository;
    }

    @GetMapping(value = "/image/{id}", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<InputStreamResource> getImage(@PathVariable("id") long id) throws IOException {
        Optional<Room> room = repository.findById(id);

        String path = "static/rooms/" + room.get().getName().toLowerCase() + ".png";
        ClassPathResource imgFile = new ClassPathResource(path);

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(new InputStreamResource(imgFile.getInputStream()));
    }

    @GetMapping("/names")
    public List<String> getNames() {
        return StreamSupport
                .stream(repository.findAll().spliterator(), false)
                .map(Room::getName)
                .distinct()
                .collect(Collectors.toList());
    }

    @GetMapping
    public Iterable<Room> getRooms() {
        return repository.findAll();
    }

}
