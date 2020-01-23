package com.example.redstonehotelapp.dto;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@EqualsAndHashCode
public class Dish {

    @Setter
    @Getter
    @Id
    @GeneratedValue
    private Long id;

    @Setter
    @Getter
    private String dishName;

    @Setter
    @Getter
    private Double price;

    @Setter
    @Getter
    private Boolean isVegetarian;

    public Dish() {

    }
}
