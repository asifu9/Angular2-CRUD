import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,RequestMethod,Headers  } from '@angular/http';
import { Router }            from '@angular/router-deprecated';
import 'rxjs/add/operator/map';


import {Entity } from '../models/Entity';



@Injectable()
export class ShareHttpService{

    endpoint_url:String = "https://restcountries.eu/rest/v1/region/africa";
    constructor(public http: Http){
        this.http = http;
    }
    getListData (url){

    	try{
            return this.http.get(url) .map(res =>{
        
                if(res.status===200){
                	return res.json();
                }else{
                	console.log(res.statusText);
                }
        
            });
        }catch(e){
        	console.log(e);
        }
    }

    delete(url,id){
    	return this.http.delete(url+'/'+id).map(res => res.json());
    }

    saveData(url,entity:Entity){
		let body = JSON.stringify(entity);
		console.log(" body " + body);
		
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(headers);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body,  {
    headers: headers
    })
            .map(res => res.json());
           // .catch(this.handleError);
		
		
    }

    updateData(url,entity:Entity){
        let body = JSON.stringify(entity);
        console.log(" body " + body);
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(headers);
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body,  {
    headers: headers
    })
            .map(res => res.json());
           // .catch(this.handleError);
        
        
    }
    
 
   }
    