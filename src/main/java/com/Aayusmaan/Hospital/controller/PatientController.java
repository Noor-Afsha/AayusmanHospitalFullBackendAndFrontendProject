package com.Aayusmaan.Hospital.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Aayusmaan.Hospital.entity.Patient;
import com.Aayusmaan.Hospital.repository.PatientRepository;

//@CrossOrigin(origins ="http://localhost:54821")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/patient")
public class PatientController {

	private PatientRepository patientRepository;

	public PatientController(PatientRepository patientRepository) {
		super();
		this.patientRepository = patientRepository;
	}

	@PostMapping("/insert")
	public Patient createPatient(@RequestBody Patient patient) {
		return patientRepository.save(patient);
	}

	@GetMapping("/getAll")
	public List<Patient> getAllPatient() {
		return patientRepository.findAll();
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable long id) throws AttributeNotFoundException {
		Patient patient = patientRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("Appointment not found with id" + id));
		patientRepository.delete(patient);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}

	@GetMapping("/getPatient/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable long id) throws AttributeNotFoundException {
		Patient patient1 = patientRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("Patient is not found with the id:" + id));
		return ResponseEntity.ok(patient1);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Patient> updatePatientById(@PathVariable long id, @RequestBody Patient patientDetails)
			throws AttributeNotFoundException {
		Patient patients = patientRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("Patient not found by this id:" + id));
		patients.setAge(patientDetails.getAge());
		patients.setBlood(patientDetails.getBlood());
		patients.setDose(patientDetails.getDose());
		patients.setFees(patientDetails.getFees());
		patients.setName(patientDetails.getName());
		patients.setPrescription(patientDetails.getPrescription());
		patients.setUrgency(patientDetails.getUrgency());

		Patient savePatient = patientRepository.save(patients);
		return ResponseEntity.ok(savePatient);
	}
}
