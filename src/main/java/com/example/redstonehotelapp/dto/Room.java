package com.example.redstonehotelapp.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Room {

    private @Id
    @GeneratedValue
    Long id;
    private String description;

    public Room() {
    }

    public Room(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Room reservation = (Room) o;
        return Objects.equals(id, reservation.id) &&
                Objects.equals(description, reservation.description);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, description);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
                ", description='" + description + '\'' +
                '}';
    }
}