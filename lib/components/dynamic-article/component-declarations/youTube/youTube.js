"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var youtube_component_1 = require("../../components/youtube/youtube.component");
exports.MaYouTubeComponentDeclaration = {
    componentType: youtube_component_1.MaYouTubeComponent,
    classList: [''],
    onInit: function (componentRef, componentData) {
        componentRef.instance.content = componentData.content;
    }
};
//# sourceMappingURL=youTube.js.map