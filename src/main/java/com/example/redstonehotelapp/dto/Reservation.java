package com.example.redstonehotelapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@AllArgsConstructor
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
    private String description;

//    @Getter
//    @Setter
//    @Id
//    private Long roomId; todo

    public Reservation() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reservation reservation = (Reservation) o;
        return Objects.equals(id, reservation.id) &&
                Objects.equals(firstName, reservation.firstName) &&
                Objects.equals(lastName, reservation.lastName) &&
                Objects.equals(fromDate, reservation.fromDate) &&
                Objects.equals(toDate, reservation.toDate) &&
                Objects.equals(description, reservation.description);
//        && Objects.equals(roomId, reservation.roomId); todo
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, fromDate, toDate, description);
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}