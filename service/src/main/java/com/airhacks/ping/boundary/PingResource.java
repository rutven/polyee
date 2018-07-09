package com.airhacks.ping.boundary;

import com.airhacks.ping.entity.Ping;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 * @author airhacks.com
 */
@Path("ping")
public class PingResource {

    @GET
    public Ping ping() {
        return new Ping("duke", "down");
    }

}
