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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ShareHttpService = (function () {
    function ShareHttpService(http) {
        this.http = http;
        this.endpoint_url = "https://restcountries.eu/rest/v1/region/africa";
        this.http = http;
    }
    ShareHttpService.prototype.getListData = function (url) {
        try {
            return this.http.get(url).map(function (res) {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    console.log(res.statusText);
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    ShareHttpService.prototype.delete = function (url, id) {
        return this.http.delete(url + '/' + id).map(function (res) { return res.json(); });
    };
    ShareHttpService.prototype.saveData = function (url, entity) {
        var body = JSON.stringify(entity);
        console.log(" body " + body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log(headers);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
        // .catch(this.handleError);
    };
    ShareHttpService.prototype.updateData = function (url, entity) {
        var body = JSON.stringify(entity);
        console.log(" body " + body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log(headers);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(url, body, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
        // .catch(this.handleError);
    };
    ShareHttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ShareHttpService);
    return ShareHttpService;
}());
exports.ShareHttpService = ShareHttpService;
//# sourceMappingURL=entity.service.js.map