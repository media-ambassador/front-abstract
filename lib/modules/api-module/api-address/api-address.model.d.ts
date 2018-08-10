export interface MaApiAddressData {
    id?: string;
    email?: string;
    street?: string;
    number?: number;
    apartment?: string;
    zip?: string;
    city?: string;
    company?: string;
    firstname?: string;
    lastname?: string;
    telephone?: string;
    type?: MaApiAddressType;
}
export interface MaApiInvoiceData {
    isCompany: boolean;
    street: string;
    number: number;
    apartment: string;
    zip: string;
    city: string;
    company: string;
    firstname: string;
    lastname: string;
    tax_no: string;
}
export declare type MaApiAddressType = 'billing' | 'shipping' | 'invoice';
