import { Validators, FormGroup, FormControl } from '@angular/forms';

export const MaTaxPattern = /^[\d]{10}$/;
export const MaEmailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const MaZipPattern = /^[\d]{2}-[\d]{3}$/;
export const MaPhonePattern = /^[\d]{9,12}$/;
export const MaPatePattern = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;

export const MaBaseFormValidators = <any>{
  firstName: [Validators.required, Validators.minLength(3), Validators.maxLength(32)],
  lastname: [Validators.required, Validators.minLength(3), Validators.maxLength(64)],
  company: [Validators.minLength(3), Validators.maxLength(128)],
  street: [Validators.required, Validators.minLength(3), Validators.maxLength(64)],
  number: [Validators.required, Validators.minLength(1), Validators.maxLength(10)],
  apartment: [] as any[],
  zip: [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(MaZipPattern)],
  city: [Validators.required, Validators.minLength(2), Validators.maxLength(32)],
  telephone: [Validators.required, Validators.minLength(9), Validators.maxLength(12), Validators.pattern(MaPhonePattern)],
  tax_no: [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern(MaTaxPattern)],
  email: [Validators.required, Validators.pattern(MaEmailPattern)],
  address_id: [] as any[],
  type: [Validators.required]
};
