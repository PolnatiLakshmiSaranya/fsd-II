namespace HospitalSystem {
    const minimumAge = 18;

    export function isEligibleForSurgery(age: number): boolean {
        return age>=minimumAge;
    }

    export function validatePatientId(id: string): string {
        const idPattern =/^P-[0-9]{3}$/;
        if(idPattern.test(id.toUpperCase())){
            return id.toUpperCase();
        }else{
            return "Invalid";
        }
    }

    export namespace Billing{
        export function calculateBill(amount: number): number {
            return amount+(amount*0.05); 
        }
    }
}

const patientAge = 20;
const patientId = "P-056";

console.log(`Eligible for Surgery? ${HospitalSystem.isEligibleForSurgery(patientAge)}`);
console.log(`Patient ID: ${HospitalSystem.validatePatientId(patientId)}`);

const treatmentCost = 5000;
const finalBill = HospitalSystem.Billing.calculateBill(treatmentCost);

console.log(`Final Bill: $${finalBill}`);