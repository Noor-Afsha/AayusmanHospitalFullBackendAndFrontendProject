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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Aayusmaan.Hospital.doclogin.entity.Medicine;
import com.Aayusmaan.Hospital.doclogin.repository.MedicineRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/medicine")
public class MedicineController {

	private MedicineRepository medicineRepository;

	public MedicineController(MedicineRepository medicineRepository) {
		super();
		this.medicineRepository = medicineRepository;
	}

	@PostMapping("/insert")
	public Medicine createMedicine(@RequestBody Medicine medicine) {
		return medicineRepository.save(medicine);
	}

	@GetMapping("/getAll")
	public List<Medicine> getAllPatient() {
		return medicineRepository.findAll();
	}

	@GetMapping("/getMedicineBy/{id}")
	public ResponseEntity<Medicine> getMedicineById(@PathVariable long id) throws AttributeNotFoundException {
		Medicine medicine = medicineRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("medicine with this id not found:-" + id));
		return ResponseEntity.ok(medicine);
	}

	@PutMapping("/updateMedicine/{id}")
	public ResponseEntity<Medicine> updateMedicineById(@PathVariable long id, @RequestBody Medicine medicineDetails)
			throws AttributeNotFoundException {
		Medicine medicines = medicineRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("medicine with this is is not found:=" + id));
		medicines.setDrugName(medicineDetails.getDrugName());
		medicines.setStock(medicineDetails.getStock());
		Medicine saveMedicine = medicineRepository.save(medicines);
		return ResponseEntity.ok(saveMedicine);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteById(@PathVariable long id) throws AttributeNotFoundException {
		Medicine medicine1 = medicineRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("Id not found:-" + id));
		medicineRepository.delete(medicine1);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}
}
