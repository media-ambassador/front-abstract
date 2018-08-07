"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_image_component_1 = require("../../components/text-image/text-image.component");
exports.MaTextImageComponentDeclaration = {
    componentType: text_image_component_1.MaTextImageComponent,
    classList: [''],
    onInit: function (componentRef, componentData) {
        componentRef.instance.content = componentData.content;
    }
};
//# sourceMappingURL=textImage.js.map