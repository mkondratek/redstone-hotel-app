package com.example.redstonehotelapp.dto;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@EqualsAndHashCode
public class Reservation {

    @Getter
    @Setter
    @Id
    @GeneratedValue
    private Long id;

    @Getter
    @Setter
    private String firstName;

    @Getter
    @Setter
    private String lastName;

    @Getter
    @Setter
    private LocalDate fromDate;

    @Getter
    @Setter
    private LocalDate toDate;

    @Getter
    @Setter
    private String comments;

    @Getter
    @Setter
    private String roomId;

    public Reservation() {
    }
}