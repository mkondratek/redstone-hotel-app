package com.example.redstonehotelapp.controller;

import com.example.redstonehotelapp.dto.Dish;
import com.example.redstonehotelapp.dto.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DishController {

    final DishRepository repository;

    @Autowired
    public DishController(DishRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/dish")
    public Iterable<Dish> getReservation() {
        return repository.findAll();
    }
}
