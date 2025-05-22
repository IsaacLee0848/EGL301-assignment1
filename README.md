# Assignment 1

This is my take on a node module for pharmacy management.

# Setup 
1. Clone the repository.
2. You can import the file, `IsaacLee_232214W_EGL301_Assignment1.js` file into your project to use it.

# Function List 
`addMedicineToInventory(medicine)`
Add Medicine to Inventory. Specify the medicine `name`, `symptoms`, `use`, `type`, `instruction`, `quantity`.

E.g.
```js
addMedicineToInventory({
    name: "Paracetamol",
    symptoms: "Fatigue",
    use: "Pain relief",
    type: "Tablet",
    instruction: "Take 1 tablet every 6 hours",
    quantity: 100
});
```

`viewMedicineInInventory()`
View all the medicine in the medicine database.

`viewMedicineByName(name)`
View the medicine in the medicine database by name.

E.g.
```js
viewMedicineByName("Paracetamol");
```

`viewMedicineBySymptoms(symptoms)`
View the medicine in the medicine database by symptoms.

E.g.
```js
viewMedicineBySymptoms("Fatigue");
```

`viewMedicineByUse(use)`
View the medicine in the medicine database by use.

E.g.
```js
viewMedicineByUse("Pain relief");
```

`viewMedicineByType(type)`
View the medicine in the medicine database by type.

E.g.
```js
viewMedicineByType("Tablet");
```

`updateMedicineInInventory(medicine)`
Updates Medicine to Inventory by the `name` of the specified medicine. Specify the medicine `name`, `symptoms`, `use`, `type`, `instruction`, `quantity`.

E.g.
```js
updateMedicineInInventory({
    name: "Paracetamol",
    symptoms: "Fatigue",
    use: "Pain relief",
    type: "Tablet",
    instruction: "Take 1 tablet every 6 hours",
    quantity: 100
});
```

`addNewPrescriptionforUser(prescription)`
Add New Prescription for User. Specify the `userName`, `medicineName`, `quantity`, and `instruction` of the prescription.
E.g.
```js
addNewPrescriptionforUser({
    userName: "John Doe",
    medicineName: "Paracetamol",
    quantity: 2,
    instruction: "Take 1 tablet every 6 hours"
});
```

`viewPrescriptionHistoryforUser(userName)`
View Prescription History for User. Specify the `userName` of the prescription.

E.g.
```js
viewPrescriptionHistoryforUser("John Doe");
```

# References
- [Watsons Singapore](https://www.watsons.com.sg/)
- [Guardian Singapore](https://www.guardian.com.sg/)
