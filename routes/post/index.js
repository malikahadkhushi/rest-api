const express = require("express");
const { create_post, get_All_post,delete_post,update_post } = require("../../controllers/post");

const post_route = express.Router();

post_route.post("/create-post", create_post);
post_route.get("/get-posts", get_All_post);
post_route.delete("/delete-post", delete_post);
post_route.put("/update-post", update_post);

module.exports = post_route;
