let medicineDB = []
let prescriptionDB = []

module.exports = {


    addMedicineToInventory(medicine) {
        if (typeof medicine.name !== "string") {
            return; //i.e. Nasonex
        }

        if (typeof medicine.symptoms !== "string") {
            return; //i.e. Headache
        }
        
        if (typeof medicine.use !== "string") {
            return; //i.e. Runny Nose
        }

        if (typeof medicine.type !== "string") {
            return; //i.e. Nasal Spray
        }
          
        if (typeof medicine.instruction !== "string") {
            return; //i.e. 2 sprays in each nostril once daily
        }
        
        if (typeof medicine.quantity !== "number") {
            return; //i.e. 2
        }
          
        if (medicine.quantity < 1) {
            return;
        }

        medicineDB.push(medicine);      
    },


    viewMedicineInInventory() {
        return medicineDB;
    },
    viewMedicineByName(name) {
        if (typeof name !== "string") {
            return;
        }

        let result = []

        for (let medicine of medicineDB) {
            if (medicine.name === name) {
                result.push(medicine);
            }
        }

        return result;
    },
    viewMedicineBySymptoms(symptoms) {
        if (typeof symptoms !== "string") {
            return;
        }

        let result = []

        for (let medicine of medicineDB) {
            if (medicine.symptoms === symptoms) {
                result.push(medicine);
            }
        }

        return result;
    },
    viewMedicineByUse(use) {
        if (typeof use !== "string") {
            return;
        }

        let result = []

        for (let medicine of medicineDB) {
            if (medicine.use === use) {
                result.push(medicine);
            }
        }

        return result;
    },
    viewMedicineByType(type) {
        if (typeof type !== "string") {
            return;
        }

        let result = []

        for (let medicine of medicineDB) {
            if (medicine.type === type) {
                result.push(medicine);
            }
        }

        return result;
    },


    updateMedicineInInventory(newMedicine) {
        if (typeof newMedicine.name !== "string") {
            return;
        }

        if (typeof newMedicine.symptoms !== "string") {
            return;
        }
        
        if (typeof newMedicine.use !== "string") {
            return;
        }

        if (typeof newMedicine.type !== "string") {
            return;
        }
          
        if (typeof newMedicine.instruction !== "string") {
            return;
        }

        if (typeof newMedicine.quantity !== "number") {
            return;
        }
          
        if (newMedicine.quantity < 1) {
            return;
        }

        for (let medicine of medicineDB) {
            if (newMedicine.name === medicine.name) {
                medicine.symptoms = newMedicine.symptoms;
                medicine.use = newMedicine.use;
                medicine.type = newMedicine.type;
                medicine.instruction = newMedicine.instruction;
                medicine.quantity = newMedicine.quantity;
            }
        }
    },
    

    addNewPrescriptionforUser(prescription) {
        if (typeof prescription.userName !== "string") {
            return;
        }

        if (typeof prescription.medicineName !== "string") {
            return;
        }

        if (typeof prescription.instruction !== "string") {
            return;
        }

        if (typeof prescription.quantity !== "number") {
            return;
        }

        if (prescription.quantity < 1) {
            return;
        }

        let found = null;

        for (let medicine of medicineDB) {
            if (prescription.medicineName === medicine.name) {
                found = medicine
            }
        }
        if (found != null) {
            let remainder = found.quantity - prescription.quantity
            if (remainder >= 0) {
                prescriptionDB.push(prescription);
                found.quantity = remainder;
            }
        }
        
    },


    viewPrescriptionHistoryforUser(userName) {
        if (typeof userName !== "string") {
            return;
        }

        let result = []

        for (let prescription of prescriptionDB) {
            if (prescription.userName === userName) {
                result.push(prescription);
            }
        }

        return result;
    }
};
