package org.acme.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

import org.acme.model.User;
import org.acme.service.UserService;


@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {
    @Inject
    UserService userService;

    @GET
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @POST
    public void addUser(User user) {
        userService.addUser(user);
    }
}
