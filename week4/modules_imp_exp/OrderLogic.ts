import { DELIVERY_CHARGE, GST_RATE } from "./Constants.js";
import type { Customer } from "./Customer.js";

export class FoodOrder {
    constructor(
        public customer: Customer,
        private foodPrice: number,
        public orderId: number
    ) {}

    public calculateBill(): number{
        const gst=this.foodPrice*GST_RATE;
        return this.foodPrice+gst+DELIVERY_CHARGE;
    }

    public printBill(): void{
        console.log("----- Food Order Receipt -----");
        console.log(`Customer: ${this.customer.name}`);
        console.log(`Address: ${this.customer.address}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Payment Mode: ${this.customer.paymentMode}`);
        console.log(`Final Bill: $${this.calculateBill()}`);
    }
}