package com.myshare.rest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.myshare.dao.CommonDAO;
import com.myshare.domain.Entity;

@Path("/staticservice")
public class StaticService {

	@POST
	@Path("/entity")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createEntity(Entity entity){
		try{
			System.out.println("here i am in entity " + entity);

			entity.setId(UUID.randomUUID().toString());
			System.out.println("after adding uuid " + entity);
			CommonDAO.addOrUpdate(entity);
		}catch(Exception ex){
			ex.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(null).build();
		}
		return Response.status(Status.OK).entity(entity).build();

	}
	
	@PUT
	@Path("/entity")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateEntity(Entity entity){
		try{
			System.out.println("updating entity " + entity);

			CommonDAO.addOrUpdate(entity);
		}catch(Exception ex){
			ex.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(null).build();
		}
		return Response.status(Status.OK).entity(entity).build();

	}
	
	
	@GET
	@Path("/entity")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllEntities(){
		List<Entity> list=new ArrayList<Entity>();
		try{
			System.out.println("here i am in entity " );
			System.out.println("after adding uuid " );
			list= (List<Entity>) CommonDAO.findAll(Entity.class);
			}catch(Exception ex){
			ex.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(null).build();
		}
		return Response.status(Status.OK).entity(list).build();

	}

	
	@DELETE
	@Path("/entity/{id}")
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteEntity(@PathParam("id") String id){
		String result="FAILURE";
		Entity ent=null;
		try{
			System.out.println("here i am in entity " + id );
			Response res= getEntityById(id);
			ent=(Entity)res.getEntity();
			System.out.println(" ent " + ent);
			int count=CommonDAO.delete(ent);
			if(count>0)
				result="SUCCESS";
			System.out.println("result of delete is " + result);
			}catch(Exception ex){
			ex.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity("ERROR " + ex.getMessage()).build();
		}
		return Response.status(Status.OK).entity(ent).build();

	}
	
	@GET
	@Path("/entity/{id}")
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getEntityById(@PathParam("id")String id){
		System.out.println("ent fetch by id " + id);
		List<Entity> result=null;
		Entity query=new Entity();
		query.setId(id);

		try{
		 result= (List<Entity>) CommonDAO.findWithQuery(query, Entity.class);
		 System.out.println("rsult is " + result);
		}catch(Exception ex){
			ex.printStackTrace();
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(null).build();
		}
		if(null!=result && result.size()>0){
			return Response.status(Status.OK).entity(result.get(0)).build();
		}else{
			return Response.status(Status.OK).entity(null).build();
		}
			
	}
}
