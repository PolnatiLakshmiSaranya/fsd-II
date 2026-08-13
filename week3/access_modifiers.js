"use strict";
class SmartHome {
    ownerName;
    alarmCode;
    securityStatus;
    cameraCount = 2;
    constructor(owner, code) {
        this.ownerName = owner;
        this.alarmCode = code;
        this.securityStatus = false;
    }
    armSystem(code) {
        if (this.verifyCode(code)) {
            this.securityStatus = true;
            console.log("Security system is now ARMED.");
        }
        else {
            console.log("Incorrect security code.");
        }
    }
    disarmSystem(code) {
        if (this.verifyCode(code)) {
            this.securityStatus = false;
            console.log("Security system is now DISARMED.");
        }
        else {
            console.log("Incorrect security code.");
        }
    }
    verifyCode(code) {
        return this.alarmCode === code;
    }
}
class PremiumSmartHome extends SmartHome {
    addCamera() {
        this.cameraCount++;
        console.log(`New camera installed. Total Cameras: ${this.cameraCount}`);
    }
}
const myHome = new SmartHome("Saranya", 44464);
console.log(`Home Owner: ${myHome.ownerName}`);
myHome.armSystem(44464);
myHome.disarmSystem(44464);
const premiumHome = new PremiumSmartHome("Hasini", 44021);
console.log(`Premium Home Owner: ${premiumHome.ownerName}`);
premiumHome.addCamera();
premiumHome.armSystem(44021);
