package com.example.redstonehotelapp.dto;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class Reservation {
    //todo lombok

    private @Id
    @GeneratedValue
    Long id;
    private String firstName;
    private String lastName;
    private LocalDate from;
    private LocalDate to;
    private String description;

    @Id
    private Long roomId;

    public Reservation() {
    }

    public Reservation(String firstName, String lastName, LocalDate from, LocalDate to, String description, Long roomId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.from = from;
        this.to = to;
        this.description = description;
        this.roomId = roomId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reservation reservation = (Reservation) o;
        return Objects.equals(id, reservation.id) &&
                Objects.equals(firstName, reservation.firstName) &&
                Objects.equals(lastName, reservation.lastName) &&
                Objects.equals(from, reservation.from) &&
                Objects.equals(to, reservation.to) &&
                Objects.equals(description, reservation.description) &&
                Objects.equals(roomId, reservation.roomId);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, firstName, lastName, description);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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