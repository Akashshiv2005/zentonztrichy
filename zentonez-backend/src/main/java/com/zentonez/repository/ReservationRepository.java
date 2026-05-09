package com.zentonez.repository;

import com.zentonez.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    @Query("SELECT r.time FROM Reservation r WHERE r.service = :service AND r.date = :date")
    List<String> findBookedSlots(@Param("service") String service, @Param("date") String date);
}
