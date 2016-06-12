package com.myshare.dao.init;

import java.util.Map;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.myshare.mongoutil.IMongoHelper;
import com.myshare.spring.SpringBeanRegistry;


public abstract class AbstractDAO {


	/**
	 * Method to retrieve the API implementation for the current content store provider
	 * 
	 * @return the content store provider API implementation
	 */
	protected static IMongoHelper getDBHelper() {
		return SpringBeanRegistry.getInstance().getDbHelper();
	}

	/**
	 * Utility method to specify the fields to be included in the query results
	 * 
	 * @param query
	 *            Query on which we specify the fields to be included
	 * @param fieldsToInclude
	 *            the array of fields to be included
	 */
	protected static void addFieldsToQuery(Query query, String... fieldsToInclude) {
		for (String fieldName : fieldsToInclude) {
			query.fields().include(fieldName);
		}
	}

	/**
	 * Utility method to specify the field on which the sub-document needs to be filtered in the query results
	 * 
	 * @param fieldName
	 *            the field on which the sub-document needs to be filtered
	 * @param query
	 *            the query on which we specify the sub-document filter criteria
	 */
	protected static void setPositionFilterToQuery(String fieldName, Query query) {
		if (fieldName != null && !fieldName.isEmpty()) {
			query.fields().position(fieldName, 1);
		}
	}

	/**
	 * Utility method for populating the data to be updated
	 * 
	 * @param updateData
	 *            the data to be updated
	 * @return wrapper object that contains the data to be updated
	 */
	protected static Update getUpdateCriteria(Map<String, Object> updateData) {
		Update updateCriteria = new Update();
		for (String key : updateData.keySet()) {
			updateCriteria.set(key, updateData.get(key));
		}
		return updateCriteria;
	}

	/**
	 * This method creates a collection with the specified name, if it doesn't exist
	 * 
	 * @param collectionName
	 */
	protected static void createCollection(String collectionName) {
		if (!getDBHelper().isCollectionExists(collectionName)) {
			getDBHelper().createCollection(collectionName);
		}
	}

	/**
	 * This method returns the collection name from the domain class by reading the annotation value
	 * 
	 * @param domainClass the class literal representing the domain class
	 * @return the collection name
	 */
	protected static String getCollectionNameFromClass(Class<?> domainClass) {
		return domainClass.getAnnotation(Document.class).collection();
	}


}
