module.exports = (app) => {
    const auth = require("../controllers/auth.controller.js");

    var router = require("express").Router();

    // Sign in
    router.post("/signin", auth.signin);

    // Create a new Tutorial
    router.post("/signup", auth.create);

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

    app.use("/api/auth", router);
};
