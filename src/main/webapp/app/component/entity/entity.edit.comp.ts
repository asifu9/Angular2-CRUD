import { Component ,Input,Inject} from '@angular/core';
import {Entity } from '../../models/Entity';
import {ShareHttpService } from '../../service/entity.service';
import  {Router,RouteParams} from '@angular/router-deprecated';
//import { RouteParams } from '@angular/router';
@Component({
  selector: 'edit1Entity',

  templateUrl:'template/entity/entity.edit.html',
  directives: [],
  providers: [
    Entity,ShareHttpService
  ]

})

export class EntityEditComponent {

  public editEntity:Entity=new Entity;
   constructor(public _countryService: ShareHttpService,public _router:Router, routeParams: RouteParams){
      console.log("--------------------");

      let parIdValue=routeParams.get('id');
      console.log(parIdValue);
          this._countryService.getListData('http://localhost:8080/myshare/rest/staticservice/entity/'+parIdValue).
      subscribe(
      data => {
        this.editEntity=data;
        console.log(data);
      },
      error =>  this.handleError(error),
      () => console.log("finished done in fetch"));
    }

    handleError(error){
      console.log("ok error is here ");
      console.log(error);
    }
   
    updateEntity(e){
    	this._countryService.updateData('http://localhost:8080/myshare/rest/staticservice/entity',e).
    	subscribe(
    	data => this.editEntity=data,
    	error =>  alert(error),
    	() => {console.log("finished done in update");this._router.navigate(['/All']);});

    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/