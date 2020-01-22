package com.example.redstonehotelapp.dto;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource
public interface ReservationRepository extends CrudRepository<Reservation, Long> {

//    @PreAuthorize("hasRole('ADMIN')")
//    @Override
//    Iterable<Reservation> findAll();
}
