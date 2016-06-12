"use strict";
var router_deprecated_1 = require('@angular/router-deprecated');
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var home_comp_1 = require('./component/home/home.comp');
/*
bootstrap(HomeComponent, [ HTTP_PROVIDERS,ROUTER_PROVIDERS ]);
 */
platform_browser_dynamic_1.bootstrap(home_comp_1.HomeComponent, [
    http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS
]);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=main.js.map