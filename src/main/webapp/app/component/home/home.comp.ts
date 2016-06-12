import { Component } from '@angular/core';
import {EntityComponent } from '../../component/entity/entity.comp';
import {EntityListComponent } from '../../component/entity/entity.list.comp';
import {EntityEditComponent } from '../../component/entity/entity.edit.comp';
import { ROUTER_DIRECTIVES,ROUTER_PROVIDERS,RouteConfig } from '@angular/router-deprecated';

@Component({
  selector: 'homeComp',

  templateUrl:'./template/home/home.tmp.html',
  directives:[EntityComponent,EntityListComponent,ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/All',name:'All', component: EntityListComponent },
  {path: '/New',name:'New', component: EntityComponent},
{path: '/Edit/:id',name:'Edit', component: EntityEditComponent}

])
export class HomeComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/