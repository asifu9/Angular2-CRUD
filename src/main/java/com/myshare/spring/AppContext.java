package com.myshare.spring;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;


public class AppContext  implements ApplicationContextAware {
	private static ApplicationContext applicationContext;
	private static final Logger LOGGER = LoggerFactory.getLogger(AppContext.class);

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.context.ApplicationContextAware#setApplicationContext(org.springframework.context.ApplicationContext)
	 */
	public void setApplicationContext(ApplicationContext appContext) throws BeansException {
		applicationContext = appContext;
		if (LOGGER.isDebugEnabled()) {
			LOGGER.debug("application context set for" + applicationContext.getApplicationName());
		}
	}

	/**
	 * Returns the spring application context based on the current context of execution
	 * 
	 * @return
	 */
	public static ApplicationContext getApplicationContext() {
		return applicationContext;
	}
}
