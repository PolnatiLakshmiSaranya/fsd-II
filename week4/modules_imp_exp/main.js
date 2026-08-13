import { FoodOrder } from "./OrderLogic.js";
const customer = {
    name: "Saranya",
    address: "Bhimavaram",
    paymentMode: "UPI"
};
const myOrder = new FoodOrder(customer, 480, 1078);
myOrder.printBill();
