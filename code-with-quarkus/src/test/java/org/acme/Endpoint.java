package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("rest")
public class Endpoint {


    @GET
    public String hello() {
        return "Hello, World! - testando meu codigo ˆˆ";
    }
}
