"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_component_1 = require("../../components/image/image.component");
exports.MaImageComponentDeclaration = {
    componentType: image_component_1.MaImageComponent,
    classList: [''],
    onInit: function (componentRef, componentData) {
        componentRef.instance.content = componentData.content;
    }
};
//# sourceMappingURL=image.js.map