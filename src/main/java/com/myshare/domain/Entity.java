package com.myshare.domain;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;


//@JsonIgnoreProperties((ignoreUnknown = true))
public class Entity extends Common {

	@JsonProperty("Id")
	private String id;
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("createdOn")
	private Date createOn;
	@JsonProperty("updatedOn")
	private Date updatedOn;
	@JsonProperty("isActive")
	private String isActive;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getCreateOn() {
		return createOn;
	}
	public void setCreateOn(Date createOn) {
		this.createOn = createOn;
	}
	public Date getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	
	public String getIsActive() {
		return isActive;
	}
	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}
	public String toString(){
		return name + " : " + isActive + 
				" : " + id;
	}
}
