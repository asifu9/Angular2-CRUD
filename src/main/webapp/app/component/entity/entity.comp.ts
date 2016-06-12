import { Component ,Input} from '@angular/core';
import {Entity } from '../../models/Entity';
import {ShareHttpService } from '../../service/entity.service';
import  {Router,ROUTER_PROVIDERS} from '@angular/router-deprecated';


@Component({
  selector: 'entity',

  templateUrl:'template/entity/entity.create.html',
  directives: [],
  providers: [
    Entity,ShareHttpService,ROUTER_PROVIDERS
  ]

})

export class EntityComponent {

	@Input() entity:Entity=new Entity();
  	
  
    constructor(public _countryService: ShareHttpService,public _router:Router){
    }
    
    saveEntity(e){
    	this._countryService.saveData('http://localhost:8080/myshare/rest/staticservice/entity',e).
    	subscribe(
    	data => this.entity=data,
    	error =>  alert(error),
    	() => {console.log("finished done saving");this._router.navigate(['/All']);});

    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/