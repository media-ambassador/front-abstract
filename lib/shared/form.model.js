"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
exports.MaTaxPattern = /^[\d]{10}$/;
exports.MaEmailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
exports.MaZipPattern = /^[\d]{2}-[\d]{3}$/;
exports.MaPhonePattern = /^[\d]{9,12}$/;
exports.MaPatePattern = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
exports.MaBaseFormValidators = {
    firstName: [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(32)],
    lastname: [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(64)],
    company: [forms_1.Validators.minLength(3), forms_1.Validators.maxLength(128)],
    street: [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(64)],
    number: [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(10)],
    apartment: [forms_1.Validators.minLength(1), forms_1.Validators.maxLength(10)],
    zip: [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(6), forms_1.Validators.pattern(exports.MaZipPattern)],
    city: [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)],
    telephone: [forms_1.Validators.required, forms_1.Validators.minLength(9), forms_1.Validators.maxLength(12), forms_1.Validators.pattern(exports.MaPhonePattern)],
    tax_no: [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(12), forms_1.Validators.pattern(exports.MaTaxPattern)],
    email: [forms_1.Validators.required, forms_1.Validators.pattern(exports.MaEmailPattern)],
    address_id: [],
    type: [forms_1.Validators.required]
};
exports.MaBaseAddressFormGroup = new forms_1.FormGroup({
    email: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.email }),
    firstname: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.firstName }),
    lastname: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.lastname }),
    company: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.company }),
    street: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.street }),
    number: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.number }),
    apartment: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.apartment }),
    zip: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.zip }),
    city: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.city }),
    telephone: new forms_1.FormControl('', { validators: exports.MaBaseFormValidators.telephone })
});
exports.MaBaseInvoiceFormGroup = new forms_1.FormGroup({
    company: new forms_1.FormControl('', { validators: [] }),
    firstname: new forms_1.FormControl('', { validators: [] }),
    lastname: new forms_1.FormControl('', { validators: [] }),
    street: new forms_1.FormControl('', { validators: [] }),
    number: new forms_1.FormControl('', { validators: [] }),
    apartment: new forms_1.FormControl('', { validators: [] }),
    zip: new forms_1.FormControl('', { validators: [] }),
    city: new forms_1.FormControl('', { validators: [] }),
    tax_no: new forms_1.FormControl('', { validators: [] })
});
//# sourceMappingURL=form.model.js.map