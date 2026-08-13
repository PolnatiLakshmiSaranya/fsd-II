export interface Customer{
    name: string;
    address: string;
    paymentMode?: "Cash" | "UPI" | "Card";
}