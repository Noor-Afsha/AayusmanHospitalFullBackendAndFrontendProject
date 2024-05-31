package com.Aayusmaan.Hospital.doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Aayusmaan.Hospital.doclogin.entity.Appointments;
@Repository
public interface AppointmentsRepository extends JpaRepository<Appointments, Long>{

}
