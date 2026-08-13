"use strict";
class LaptopWarranty {
    ownerName;
    brand;
    price;
    warrantyYears;
    constructor(owner, brand, price, years) {
        this.ownerName = owner;
        this.brand = brand;
        this.price = price;
        this.warrantyYears = years ?? 1;
    }
    calculateWarrantyCost() {
        return this.price * 0.05 * this.warrantyYears;
    }
    displayDetails() {
        console.log("Laptop Warranty Details: ");
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Laptop Brand: ${this.brand}`);
        console.log(`Price: $${this.price}`);
        console.log(`Warranty: ${this.warrantyYears} year(s)`);
        console.log(`Warranty Cost: $${this.calculateWarrantyCost()}`);
    }
}
const laptop1 = new LaptopWarranty("Teja", "Lenovo", 15000);
const laptop2 = new LaptopWarranty("Hasini", "HP", 12000, 3);
laptop1.displayDetails();
laptop2.displayDetails();
laptop2.price = 20000;
console.log(`Updated Warranty Cost for Hasini: $${laptop2.calculateWarrantyCost()}`);
