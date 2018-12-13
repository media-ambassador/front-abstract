"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quote_component_1 = require("../../components/quote/quote.component");
exports.MaQuoteComponentDeclaration = {
    componentType: quote_component_1.MaQuoteComponent,
    classList: ['dynamic-quote-component'],
    onInit: function (componentRef, componentData) {
        componentRef.instance.content = componentData.content;
    }
};
//# sourceMappingURL=quote.js.map