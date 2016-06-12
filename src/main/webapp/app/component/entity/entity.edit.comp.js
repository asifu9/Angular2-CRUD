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
//import { RouteParams } from '@angular/router';
var EntityEditComponent = (function () {
    function EntityEditComponent(_countryService, _router, routeParams) {
        var _this = this;
        this._countryService = _countryService;
        this._router = _router;
        this.editEntity = new Entity_1.Entity;
        console.log("--------------------");
        var parIdValue = routeParams.get('id');
        console.log(parIdValue);
        this._countryService.getListData('http://localhost:8080/myshare/rest/staticservice/entity/' + parIdValue).
            subscribe(function (data) {
            _this.editEntity = data;
            console.log(data);
            /* if(this.entities.length>0){
                 this.selectedentity=this.entities[0];
             }*/
        }, function (error) { return _this.handleError(error); }, function () { return console.log("finished done in fetch"); });
        //console.log(parIdValue);
    }
    EntityEditComponent.prototype.handleError = function (error) {
        console.log(error);
    };
    EntityEditComponent.prototype.updateEntity = function (e) {
        var _this = this;
        this._countryService.updateData('http://localhost:8080/myshare/rest/staticservice/entity', e).
            subscribe(function (data) { return _this.editEntity = data; }, function (error) { return alert(error); }, function () { console.log("finished done"); _this._router.navigate(['/All']); });
    };
    EntityEditComponent = __decorate([
        core_1.Component({
            selector: 'edit1Entity',
            templateUrl: 'template/entity/entity.edit.html',
            directives: [],
            providers: [
                Entity_1.Entity, entity_service_1.ShareHttpService
            ]
        }), 
        __metadata('design:paramtypes', [entity_service_1.ShareHttpService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], EntityEditComponent);
    return EntityEditComponent;
}());
exports.EntityEditComponent = EntityEditComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=entity.edit.comp.js.map