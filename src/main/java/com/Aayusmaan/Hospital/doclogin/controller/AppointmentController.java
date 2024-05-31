package com.Aayusmaan.Hospital.doclogin.controller;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Aayusmaan.Hospital.doclogin.entity.Appointments;
import com.Aayusmaan.Hospital.doclogin.repository.AppointmentsRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

	private AppointmentsRepository appointmentsRepository;

	public AppointmentController(AppointmentsRepository appointmentsRepository) {
		super();
		this.appointmentsRepository = appointmentsRepository;
	}

	@PostMapping("/insert")
	public Appointments createAppointment(@RequestBody Appointments appointments) {
		return appointmentsRepository.save(appointments);
	}

	@GetMapping
	public List<Appointments> getAllPatient() {
		return appointmentsRepository.findAll();
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteAppointment(@PathVariable long id) throws AttributeNotFoundException{
		Appointments appointments= appointmentsRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Appointment not found with id"+ id));
		appointmentsRepository.delete(appointments);
		Map<String,Boolean> response=new HashMap<String,Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}

}
