import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface Product {
    id: bigint;
    name: string;
    description: string;
    category: string;
    imageId: string;
    price: bigint;
}
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
