// Imports for loading & configuring the in-memory web api
import { provide }    from '@angular/core';
import { XHRBackend } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { HomeComponent }   from './component/home/home.comp';

/*
bootstrap(HomeComponent, [ HTTP_PROVIDERS,ROUTER_PROVIDERS ]);
 */
bootstrap(HomeComponent, [
    HTTP_PROVIDERS,ROUTER_PROVIDERS
]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/