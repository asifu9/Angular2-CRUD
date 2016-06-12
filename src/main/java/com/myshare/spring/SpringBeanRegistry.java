package com.myshare.spring;

import com.myshare.mongoutil.IMongoHelper;


/**
 * This registry class provides helper methods for accessing the beans defined
 * in spring config files
 * 
 * @author martin.simon
 *
 */
public class SpringBeanRegistry {
	private volatile static SpringBeanRegistry springBeanRegistry;
	private IMongoHelper dbHelper = null;

	private SpringBeanRegistry() {
	}

	/**
	 * The factory method for getting an instance of the registry
	 * 
	 * @return
	 */
	public static SpringBeanRegistry getInstance() {
		if (springBeanRegistry == null) {
			synchronized (SpringBeanRegistry.class) {
				if (springBeanRegistry == null) {
					springBeanRegistry = new SpringBeanRegistry();
				}
			}
		}
		return springBeanRegistry;
	}

	public IMongoHelper getDbHelper() {
		return dbHelper;
	}

	public void setDbHelper(IMongoHelper dbHelper) {
		this.dbHelper = dbHelper;
	}

	
}
