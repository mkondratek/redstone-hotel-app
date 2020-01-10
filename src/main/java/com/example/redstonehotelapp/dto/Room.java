package com.example.redstonehotelapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
@AllArgsConstructor
public class Room {

    @Getter
    @Setter
    @Id @GeneratedValue private Long id;
    @Getter @Setter private String description;

    public Room() {
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

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", description='" + description + '\'' +
                '}';
    }
}