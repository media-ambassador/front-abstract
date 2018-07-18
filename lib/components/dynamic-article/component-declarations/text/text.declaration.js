"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var block_text_component_1 = require("../../components/block-text/block-text.component");
exports.MaTextComponentDeclaration = {
    componentType: block_text_component_1.MaBlockTextComponent,
    classList: [''],
    onInit: function (componentRef, componentData) {
        componentRef.instance.content = componentData.content;
    }
};
//# sourceMappingURL=text.declaration.js.map