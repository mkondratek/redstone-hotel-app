package com.example.redstonehotelapp.dto;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ReservationRepository extends CrudRepository<Reservation, Long> {

}
