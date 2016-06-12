import { Component } from '@angular/core';
import {Entity } from '../../models/Entity';
import {EntityComponent} from '../../component/entity/entity.comp';
import {ShareHttpService } from '../../service/entity.service';
import  {Router} from '@angular/router-deprecated';
@Component({
  	selector: "entityList",
  	templateUrl:'./template/entity/entity.list.tmp.html',
  	providers: [ShareHttpService,],
  	directives: [EntityComponent],
  	inputs:["entity","editEntity"],
  	styleUrls: ['./css/style.css'],
})




export class EntityListComponent{
  	public entities: Entity[]=[];
	entity:Entity=new Entity;
  editEntity:Entity=new Entity;
	 public selectedentity = {};
	public onentityClick(ent){
        this.selectedentity = ent;
        this.entity=ent;
        this.isUpdateShow=true;
        this.editEntity=ent;

       
  	}
  	public editEntityObject(ent){
      console.log("ss " + ent);
        this._router.navigate(['Edit',{id:ent}]);
    }
  
    constructor(public _countryService: ShareHttpService,public _router:Router){
    	this._countryService.getListData('http://localhost:8080/myshare/rest/staticservice/entity').
    	subscribe(
    	data => {
        this.entities=data;
        /*if(this.entities.length>0){
            this.selectedentity=this.entities[0];
        }*/
      },
    	error =>  this.handleError(error),
    	() => console.log("finished done in fetch"));
    }

	handleError=function(error){
		console.log(error);
	}
	
  	public deleteEntity(ent){
  		this._countryService.delete('http://localhost:8080/myshare/rest/staticservice/entity',ent.Id).
    	subscribe(
    	data => this.entity=data,
    	error => this.handleError(error),
    	() => {
    	
    	console.log("finished delete in fetch");
    	let index = this.entities.indexOf(ent);
    	this.entities.splice(index, 1);
    	
    	});
  		
  	}
}
