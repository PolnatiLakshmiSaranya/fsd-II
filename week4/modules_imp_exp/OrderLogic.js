import { DELIVERY_CHARGE, GST_RATE } from "./Constants.js";
export class FoodOrder {
    customer;
    foodPrice;
    orderId;
    constructor(customer, foodPrice, orderId) {
        this.customer = customer;
        this.foodPrice = foodPrice;
        this.orderId = orderId;
    }
    calculateBill() {
        const gst = this.foodPrice * GST_RATE;
        return this.foodPrice + gst + DELIVERY_CHARGE;
    }
    printBill() {
        console.log("----- Food Order Receipt -----");
        console.log(`Customer: ${this.customer.name}`);
        console.log(`Address: ${this.customer.address}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Payment Mode: ${this.customer.paymentMode}`);
        console.log(`Final Bill: $${this.calculateBill()}`);
    }
}
