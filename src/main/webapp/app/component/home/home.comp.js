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
var entity_comp_1 = require('../../component/entity/entity.comp');
var entity_list_comp_1 = require('../../component/entity/entity.list.comp');
var entity_edit_comp_1 = require('../../component/entity/entity.edit.comp');
var router_deprecated_1 = require('@angular/router-deprecated');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'homeComp',
            templateUrl: './template/home/home.tmp.html',
            directives: [entity_comp_1.EntityComponent, entity_list_comp_1.EntityListComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/All', name: 'All', component: entity_list_comp_1.EntityListComponent },
            { path: '/New', name: 'New', component: entity_comp_1.EntityComponent },
            { path: '/Edit/:id', name: 'Edit', component: entity_edit_comp_1.EntityEditComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=home.comp.js.map