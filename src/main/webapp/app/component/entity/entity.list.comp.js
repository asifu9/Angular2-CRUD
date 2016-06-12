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
var entity_comp_1 = require('../../component/entity/entity.comp');
var entity_service_1 = require('../../service/entity.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var EntityListComponent = (function () {
    function EntityListComponent(_countryService, _router) {
        var _this = this;
        this._countryService = _countryService;
        this._router = _router;
        this.entities = [];
        this.entity = new Entity_1.Entity;
        this.editEntity = new Entity_1.Entity;
        this.selectedentity = {};
        this.handleError = function (error) {
            console.log(error);
        };
        this._countryService.getListData('http://localhost:8080/myshare/rest/staticservice/entity').
            subscribe(function (data) {
            _this.entities = data;
            /*if(this.entities.length>0){
                this.selectedentity=this.entities[0];
            }*/
        }, function (error) { return _this.handleError(error); }, function () { return console.log("finished done in fetch"); });
    }
    EntityListComponent.prototype.onentityClick = function (ent) {
        this.selectedentity = ent;
        this.entity = ent;
        this.isUpdateShow = true;
        this.editEntity = ent;
    };
    EntityListComponent.prototype.editEntityObject = function (ent) {
        console.log("ss " + ent);
        this._router.navigate(['Edit', { id: ent }]);
    };
    EntityListComponent.prototype.deleteEntity = function (ent) {
        var _this = this;
        this._countryService.delete('http://localhost:8080/myshare/rest/staticservice/entity', ent.Id).
            subscribe(function (data) { return _this.entity = data; }, function (error) { return _this.handleError(error); }, function () {
            console.log("finished delete in fetch");
            var index = _this.entities.indexOf(ent);
            _this.entities.splice(index, 1);
        });
    };
    EntityListComponent = __decorate([
        core_1.Component({
            selector: "entityList",
            templateUrl: './template/entity/entity.list.tmp.html',
            providers: [entity_service_1.ShareHttpService,],
            directives: [entity_comp_1.EntityComponent],
            inputs: ["entity", "editEntity"],
            styleUrls: ['./css/style.css'],
        }), 
        __metadata('design:paramtypes', [entity_service_1.ShareHttpService, router_deprecated_1.Router])
    ], EntityListComponent);
    return EntityListComponent;
}());
exports.EntityListComponent = EntityListComponent;
//# sourceMappingURL=entity.list.comp.js.map