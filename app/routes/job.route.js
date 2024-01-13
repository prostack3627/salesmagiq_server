module.exports = (app) => {
    const job = require("../controllers/job.controller.js");

    var router = require("express").Router();

    // Job List
    router.get("/list", job.list);

    // Create a new Tutorial
    router.post("/post", job.post);

    // // Retrieve all Tutorials
    // router.get("/", tutorials.findAll);

    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);

    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);

    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);

    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);

    app.use("/api/job", router);
};
