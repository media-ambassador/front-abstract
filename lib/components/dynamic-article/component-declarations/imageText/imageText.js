"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_text_component_1 = require("../../components/image-text/image-text.component");
exports.MaImageTextComponentDeclaration = {
    componentType: image_text_component_1.MaImageTextComponent,
    classList: ['dynamic-image-text-component'],
    onInit: function (componentRef, componentData) {
        componentRef.instance.content = componentData.content;
    }
};
//# sourceMappingURL=imageText.js.map