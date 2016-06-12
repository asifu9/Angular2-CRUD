package com.myshare.mongoutil;

import java.lang.reflect.Field;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

public class MongoUtil {

	public static Query getQuery(Object obj){
		Criteria queryCriteria = null;
		 Class oClass = obj.getClass();
		 Field[] fields = oClass.getDeclaredFields();
         for (int i = 0; i < fields.length; i++) {
             fields[i].setAccessible(true);
             String fName=fields[i].getName();
             try {
                 Object value = fields[i].get(obj);
                 if (value != null) {
                     if (value.getClass().isPrimitive() ||
                             value.getClass() == java.lang.Long.class ||
                             value.getClass() == java.lang.String.class ||
                             value.getClass() == java.lang.Integer.class ||
                             value.getClass() == java.lang.Boolean.class
                             ) {
                    	if(queryCriteria==null){
                    		queryCriteria=Criteria.where(fName).is(value);
                    	}else{
                    		queryCriteria.and(fName).is(value);
                    	}
                     } 
                 }
             } catch (Exception e) {
                e.printStackTrace();
             }
         }
		return Query.query(queryCriteria);
	}
	
	
}
