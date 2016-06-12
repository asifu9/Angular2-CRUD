"use strict";
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
var Entity_1 = require('../../models/Entity');
var entity_service_1 = require('../../service/entity.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var EntityComponent = (function () {
    function EntityComponent(_countryService, _router) {
        this._countryService = _countryService;
        this._router = _router;
        this.entity = new Entity_1.Entity();
    }
    EntityComponent.prototype.saveEntity = function (e) {
        var _this = this;
        this._countryService.saveData('http://localhost:8080/myshare/rest/staticservice/entity', e).
            subscribe(function (data) { return _this.entity = data; }, function (error) { return alert(error); }, function () { console.log("finished done"); _this._router.navigate(['All']); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Entity_1.Entity)
    ], EntityComponent.prototype, "entity", void 0);
    EntityComponent = __decorate([
        core_1.Component({
            selector: 'entity',
            templateUrl: 'template/entity/entity.create.html',
            directives: [],
            providers: [
                Entity_1.Entity, entity_service_1.ShareHttpService, router_deprecated_1.ROUTER_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [entity_service_1.ShareHttpService, router_deprecated_1.Router])
    ], EntityComponent);
    return EntityComponent;
}());
exports.EntityComponent = EntityComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=entity.comp.js.map