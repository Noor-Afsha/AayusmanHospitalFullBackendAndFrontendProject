package com.Aayusmaan.Hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Aayusmaan.Hospital.entity.Patient;
@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

}
