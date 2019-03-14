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
    apartment: [],
    zip: [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(6), forms_1.Validators.pattern(exports.MaZipPattern)],
    city: [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)],
    telephone: [forms_1.Validators.required, forms_1.Validators.minLength(9), forms_1.Validators.maxLength(12), forms_1.Validators.pattern(exports.MaPhonePattern)],
    tax_no: [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(12), forms_1.Validators.pattern(exports.MaTaxPattern)],
    email: [forms_1.Validators.required, forms_1.Validators.pattern(exports.MaEmailPattern)],
    address_id: [],
    type: [forms_1.Validators.required]
};
//# sourceMappingURL=form.model.js.map