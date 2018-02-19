"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var slider_item_directive_1 = require("./slider-item.directive");
var core_1 = require("@angular/core");
var slider_model_1 = require("./slider.model");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/scan");
require("rxjs/add/operator/publishReplay");
__export(require("./slider.model"));
/**
 * {@link MaSliderItemDirective} - wskazuje element będący slajdem,<br>
 * {@link MaSliderTopLayerDirective} - wskazuje element wyświetalny<br>
 * ponad slajderem (content NIE przesuwany podczas przewijania).
 *
 * Poniższe dyrektywy umożliwiają dodanie nawigacji do slajdera.<br>
 * Pobieraja one w parametrze ElementRef do slajdera,<br>
 * który mają nawigować.
 *
 * {@link MaSliderNavPrevDirective},<br>
 * {@link MaSliderNavNextDirective},<br>
 * {@link MaSliderNavToDirective} wymaga podania dodatkowego parametru
 * MaSliderNavToIndex
 *
 * @example
 * <ma-slider #mySlider>
 *   <img maSliderItem *ngFor="let slide of slides" src="{{slide.url}}"/>
 *   <div maSliderTopLayer>Warstwa nie przewijana</div>
 * </ma-slider>
 * <div [maSliderNavPrev]="mySlider" class="my-class-slider-prev">&lt;</div>
 * <div [maSliderNavNext]="mySlider" class="my-class-slider-next">&gt;</div>
 */
var MaSliderComponent = /** @class */ (function () {
    function MaSliderComponent(element) {
        var _this = this;
        this.__classMaSlider = true;
        this.__classSwiperContainer = true;
        this.slider = element;
        this.updateSubject = new BehaviorSubject_1.BehaviorSubject({
            initialized: false,
            slides: 0,
            currentSlide: 0,
            isBeginning: true,
            isEnd: true
        });
        var state = this.updateSubject.scan(function (acc, curr) { return Object.assign({}, acc, curr); }, {}).publishReplay(1);
        this.state$ = state;
        state.connect();
        this.stateSubscription = this.state$.subscribe(function (currentState) {
            _this._state = currentState;
            _this.updateSlidersActiveCssIndicator();
        });
        this._options = Object.assign({}, slider_model_1.maSliderOptionsDefaults);
    }
    Object.defineProperty(MaSliderComponent.prototype, "maOptions", {
        set: /** Ustawienia slidera */
        function (options) {
            this._options = Object.assign({}, slider_model_1.maSliderOptionsDefaults, options);
        },
        enumerable: true,
        configurable: true
    });
    MaSliderComponent.prototype.slideNext = function (time) {
        if (!this._options.loop && this._state.currentSlide < (this._state.slides - 1)) {
            this.swiperInstance.slideNext(time);
        }
    };
    MaSliderComponent.prototype.slidePrev = function (time) {
        this.swiperInstance.slidePrev(time);
    };
    MaSliderComponent.prototype.slideTo = function (index, time) {
        this.swiperInstance.slideTo(index, time);
    };
    MaSliderComponent.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
    };
    MaSliderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.swiperInstance = new Swiper(this.slider.nativeElement, this._options);
        this.updateSubject.next({
            initialized: true,
            slides: this.slides.length,
            currentSlide: this.swiperInstance.activeIndex,
            isBeginning: this.swiperInstance.isBeginning,
            isEnd: this.swiperInstance.isEnd
        });
        this.swiperInstance.on('slideChange', function () {
            _this.updateSubject.next({
                slides: _this.slides.length,
                currentSlide: _this.swiperInstance.activeIndex,
                isBeginning: _this.swiperInstance.isBeginning,
                isEnd: _this.swiperInstance.isEnd
            });
        });
        this.updateSlidersActiveCssIndicator();
    };
    MaSliderComponent.prototype.updateSlidersActiveCssIndicator = function () {
        var _this = this;
        if (!this._state.initialized) {
            return;
        }
        setTimeout(function () {
            _this.slides.forEach(function (slide) { return slide.setActive(false); });
            if (_this.slides.length && _this.slides.toArray()[_this._state.currentSlide]) {
                _this.slides.toArray()[_this._state.currentSlide].setActive(true);
            }
            else if (_this.slides.length > 0) {
                console.error("Index out of range " + _this._state.currentSlide + " in maSliderComponent");
            }
        }, 0);
    };
    MaSliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-slider',
                    template: "\n    <div class=\"swiper-wrapper\">\n      <ng-content select=\"[maSliderItem]\"></ng-content>\n    </div>\n    <ng-content select=\"[maSliderTopLayer]\"></ng-content>\n  ",
                    styles: ["\n    ::ng-deep.ma-slider {\n      position: relative;\n      display: block;\n\n      ::ng-deep .ma-slider__top-layer {\n        top: 0px;\n        left: 0px;\n        right: 0px;\n        position: absolute;\n        text-align: center;\n        height: 100%;\n        z-index: 2;\n      }\n\n      ::ng-deep .ma-slider__navigation {\n        display: block;\n        z-index: 3;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        &__prev {\n          vertical-align: middle;\n          float: left;\n        }\n\n        &__next {\n          vertical-align: middle;\n          float: right;\n        }\n      }\n    }\n  "],
                },] },
    ];
    /** @nocollapse */
    MaSliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    MaSliderComponent.propDecorators = {
        "__classMaSlider": [{ type: core_1.HostBinding, args: ['class.ma-slider',] },],
        "__classSwiperContainer": [{ type: core_1.HostBinding, args: ['class.swiper-container',] },],
        "maOptions": [{ type: core_1.Input },],
        "state$": [{ type: core_1.Output },],
        "slides": [{ type: core_1.ContentChildren, args: [slider_item_directive_1.MaSliderItemDirective, { descendants: true },] },],
    };
    return MaSliderComponent;
}());
exports.MaSliderComponent = MaSliderComponent;
//# sourceMappingURL=slider.component.js.map