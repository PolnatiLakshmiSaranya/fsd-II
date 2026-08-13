import { FoodOrder } from "./OrderLogic.js";
import { Customer } from "./Customer.js";

const customer: Customer={
    name: "Saranya",
    address: "Bhimavaram",
    paymentMode: "UPI"
};

const myOrder = new FoodOrder(customer, 480, 1078);
myOrder.printBill();