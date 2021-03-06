var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NdvEditTimeComponent = (function () {
    function NdvEditTimeComponent(el) {
        this.show = false;
        this.save = new core_1.EventEmitter;
        this.el = el;
    }
    NdvEditTimeComponent.prototype.ngOnInit = function () {
        this.originalTime = this.time;
    };
    NdvEditTimeComponent.prototype.makeEditable = function () {
        if (this.show == false) {
            this.show = true;
        }
    };
    NdvEditTimeComponent.prototype.compareEvent = function (globalEvent) {
        if (this.tracker != globalEvent && this.show) {
            this.cancelEditable();
        }
    };
    NdvEditTimeComponent.prototype.trackEvent = function (newHostEvent) {
        this.tracker = newHostEvent;
    };
    NdvEditTimeComponent.prototype.cancelEditable = function () {
        this.show = false;
        this.time = this.originalTime;
    };
    NdvEditTimeComponent.prototype.callSave = function () {
        var _this = this;
        var data = {};
        data["" + this.fieldName] = this.time;
        var oldtime = this.time;
        setTimeout(function () { _this.originalTime = oldtime; _this.time = oldtime; }, 0);
        this.save.emit(data);
        this.show = false;
    };
    __decorate([
        core_1.Input('placeholder'), 
        __metadata('design:type', Object)
    ], NdvEditTimeComponent.prototype, "time", void 0);
    __decorate([
        core_1.Input('title'), 
        __metadata('design:type', Object)
    ], NdvEditTimeComponent.prototype, "fieldName", void 0);
    NdvEditTimeComponent = __decorate([
        core_1.Component({
            selector: 'ndv-edit',
            styles: ["\n       #ndv-ic {\n        margin-left: 10px;\n        color: #d9d9d9;\n        }\n        .ndv-comp {\n            padding:6px;\n            border-radius: 3px;\n        }\n        .active-ndv {\n            background-color: #f0f0f0;\n            border: 1px solid #d9d9d9;\n        }\n        input {\n            border-radius: 5px;\n            box-shadow: none;\n            border: 1px solid #dedede;\n            min-width: 5px;\n        }\n        .ndv-buttons {\n            background-color: #f0f0f0;\n            border: 1px solid #ccc;\n            border-top: none;\n            border-radius: 0 0 3px 3px;\n            box-shadow: 0 3px 6px rgba(111,111,111,0.2);\n            outline: none;\n            padding: 3px;\n            position: absolute;\n            margin-left: 6px;\n            z-index: 1;\n        }\n        .ndv-comp:hover {\n            border: 1px solid grey;\n        }\n        .ndv-comp:hover > ndv-ic {\n            display:block;\n        }\n\n        .ndv-save {\n            margin-right:3px;\n        }\n\n    "],
            template: "<span class='ndv-comp'>\n                    <input *ngIf='show' type='time' [(ngModel)]='time' />\n                    <i id='ndv-ic' *ngIf='!show'>\u270E</i>\n                    <span *ngIf='!show' (click)='makeEditable()'>{{time || '-Empty Field-'}}</span>\n                </span>\n                <div class='ndv-buttons' *ngIf='show'>\n                    <button class='btn-x-sm' (click)='callSave()'><i>\u2714</i></button>\n                    <button class='btn-x-sm' (click)='cancelEditable()'><i>\u2716</i></button>\n                </div>",
            host: {
                "(document: click)": "compareEvent($event)",
                "(click)": "trackEvent($event)"
            },
            outputs: ['save : onSave']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], NdvEditTimeComponent);
    return NdvEditTimeComponent;
    var _a;
})();
exports.NdvEditTimeComponent = NdvEditTimeComponent;
//# sourceMappingURL=‏‏ndv.edit.time.component.js.map