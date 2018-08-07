"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var three_columns_text_component_1 = require("../../components/three-columns-text/three-columns-text.component");
exports.MaThreeColumnsComponentDeclaration = {
    componentType: three_columns_text_component_1.MaThreeColumnsTextComponent,
    classList: ['dynamic-three-columns-component'],
    onInit: function (componentRef, componentData) {
        componentRef.instance.content = componentData.content;
    }
};
//# sourceMappingURL=3columns.js.map