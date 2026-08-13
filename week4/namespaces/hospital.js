"use strict";
var HospitalSystem;
(function (HospitalSystem) {
    const minimumAge = 18;
    function isEligibleForSurgery(age) {
        return age >= minimumAge;
    }
    HospitalSystem.isEligibleForSurgery = isEligibleForSurgery;
    function validatePatientId(id) {
        const idPattern = /^P-[0-9]{3}$/;
        if (idPattern.test(id.toUpperCase())) {
            return id.toUpperCase();
        }
        else {
            return "Invalid";
        }
    }
    HospitalSystem.validatePatientId = validatePatientId;
    let Billing;
    (function (Billing) {
        function calculateBill(amount) {
            return amount + (amount * 0.05);
        }
        Billing.calculateBill = calculateBill;
    })(Billing = HospitalSystem.Billing || (HospitalSystem.Billing = {}));
})(HospitalSystem || (HospitalSystem = {}));
const patientAge = 20;
const patientId = "P-056";
console.log(`Eligible for Surgery? ${HospitalSystem.isEligibleForSurgery(patientAge)}`);
console.log(`Patient ID: ${HospitalSystem.validatePatientId(patientId)}`);
const treatmentCost = 5000;
const finalBill = HospitalSystem.Billing.calculateBill(treatmentCost);
console.log(`Final Bill: $${finalBill}`);
