package com.myshare.dao;

import java.util.List;
import java.util.Map;

import com.myshare.dao.init.AbstractDAO;
import com.myshare.domain.Common;
import com.myshare.mongoutil.MongoUtil;

public class CommonDAO extends AbstractDAO{

	
	
	/**
	 * This method is used to add additional monitoring information
	 * 
	 * @param userInfo the monitoring information
	 */
	public static void addOrUpdate(Common common) {
		
		getDBHelper().insertOrUpdateDocument(common);
	}
	
	/**
	 * This method is used to get the complete monitoring information from content store
	 * 
	 * @return the monitoring information
	 */
	public static List<?> findAll(Class<?> data) {
		return getDBHelper().findAllDocuments(data);
	}
	
	public static int delete(Object data){
		return getDBHelper().removeDocument(data);
	}

	/**
	 * This method is used to get the monitoring information based on the specified criteria(status, queue name and title)
	 * 
	 * @param status the status
	 * @param queueNamethe queue name
	 * @param title the title
	 * @return the monitoring information
	 */
	public static List<?> findWithQuery(Object queryObj,Class<?> cls) {
		System.out.println("what is happening");
		System.out.println("query is "+MongoUtil.getQuery(queryObj));
		return getDBHelper().findDocuments(MongoUtil.getQuery(queryObj), cls);
	}
	
	public static int updateWithQuery(Object updateQuery, Map<String, Object> updateData,Class<?> classType) {
		System.out.println(MongoUtil.getQuery(updateQuery));
		return getDBHelper().updateDocuments(MongoUtil.getQuery(updateQuery), getUpdateCriteria(updateData), classType);
	}

	/**
	 * This method is used to retrieve the monitoring information by message Id
	 * 
	 * @param messageId the message Id
	 * @return the monitoring information
	 *//*
	public static ActiveMQMonitor getMonitoringInfoById(String messageId) {
		return getDBHelper().findFirstDocument(findMonitoringInfoByIdQuery(messageId), ActiveMQMonitor.class);
	}

	*//**
	 * This method is used to update the monitoring information for a particular message
	 * 
	 * @param messageId the message Id
	 * @param updateData the data to be updated
	 * @return the number of rows updated
	 *//*
	public static int updateMonitoringInfoByMessageId(String messageId, Map<String, Object> updateData) {
		return updateMonitoringInfo(findMonitoringInfoByIdQuery(messageId), updateData);
	}

	*//**
	 * This method is used tp remove the monitoring information for a particular message
	 * 
	 * @param messageId the message Id
	 * @return the number of rows deleted
	 *//*
	public static int removeMonitoringInfoByMessageId(String messageId) {
		return getDBHelper().removeDocuments(findMonitoringInfoByIdQuery(messageId), ActiveMQMonitor.class);
	}

	*//**
	 * Updates the monitoring info based on the given query criteria
	 * 
	 * @param updateQuery the condition to filter the monitoring info
	 * @param updateData the data to be updated
	 * @return the count of monitoring data updated
	 *//*
	

	*//**
	 * Creates a query for retrieving the monitoring information by message Id
	 * 
	 * @param messageId the message Id
	 * @return the Query Object
	 *//*
	private static Query findMonitoringInfoByIdQuery(String messageId) {
		return Query.query(Criteria.where(GRCIConstants.MESSAGE_ID).is(messageId));
	}

	*//**
	 * Creates a query to retrieve the monitoring information based on the specified criteria(status, queue name and title)
	 * 
	 * @param status the status
	 * @param queueName the queue name
	 * @param title the title
	 * @return the query object
	 *//*
	private static Query findMonitoringInfoQuery(String status, String queueName, String title) {
		Criteria queryCriteria = Criteria.where(GRCIConstants.MESSAGE_STATUS).is(status);
		if (null != queueName) {
			queryCriteria.and(GRCIConstants.QUEUE_NAME).is(queueName);
		}
		if (null != title) {
			queryCriteria.and(GRCIConstants.TITLE).is(title);
		}
		return Query.query(queryCriteria);
	}

	*//**
	 * Gets all the ActiveMQMonitor documents whose messagecreatedOn field is lesser than the @param date
	 * 
	 * @param fromDate
	 * @return
	 *//*
	public static List<DistributionReportDetail> findDistributionReport(Date fromDate, Date toDate) {
		Query query = Query.query(Criteria.where(GRCIConstants.MESSAGE_CREATED_TIME).lte(toDate).gte(fromDate));
		return getDBHelper().findDocuments(query, DistributionReportDetail.class);
	}*/
}
