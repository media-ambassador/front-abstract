export interface MaApiAddressData<T extends MaApiAddressType> {
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
  type?: T;
}

export interface MaApiInvoiceData {
  id?: string;
  isCompany?: boolean;
  street?: string;
  number?: number;
  apartment?: string;
  zip?: string;
  city?: string;
  company?: string;
  firstname?: string;
  lastname?: string;
  tax_no?: string;
}

export type MaApiAddressType = 'billing' | 'shipping' | 'invoice';
