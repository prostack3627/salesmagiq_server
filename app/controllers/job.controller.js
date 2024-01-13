const db = require("../models");
const Job = db.jobs;
const Op = db.Sequelize.Op;

// Job List
exports.list = (req, res) => {
  // Find Job in the database
  Job.findAll()
    .then((data) => {
      if (data) {
        return res.json({ success: true, data: data });
      } else {
        return res.json({ success: false, data: "No data." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Job Post
exports.post = (req, res) => {
  // Validate request
  if (
    !req.body.company ||
    !req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.city ||
    !req.body.state ||
    !req.body.zip ||
    !req.body.roleType ||
    !req.body.title ||
    !req.body.description ||
    !req.body.salary
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const job = {
    company: req.body.company,
    manager: req.body.name,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    role: req.body.roleType,
    title: req.body.title,
    description: req.body.description,
    salary: req.body.salary,
  };

  // Save Job in the database
  Job.create(job)
    .then((data) => {
      // res.send(data);
      res.json({ success: true, message: "The job posted!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while posting the job.",
      });
    });
};

// Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
//     const title = req.query.title;
//     var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

//     Tutorial.findAll({ where: condition })
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving tutorials.",
//             });
//         });
// };

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Tutorial.findByPk(id)
//         .then((data) => {
//             if (data) {
//                 res.send(data);
//             } else {
//                 res.status(404).send({
//                     message: `Cannot find Tutorial with id=${id}.`,
//                 });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Error retrieving Tutorial with id=" + id,
//             });
//         });
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;

//     Tutorial.update(req.body, {
//         where: { id: id },
//     })
//         .then((num) => {
//             if (num == 1) {
//                 res.send({
//                     message: "Tutorial was updated successfully.",
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
//                 });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Error updating Tutorial with id=" + id,
//             });
//         });
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Tutorial.destroy({
//         where: { id: id },
//     })
//         .then((num) => {
//             if (num == 1) {
//                 res.send({
//                     message: "Tutorial was deleted successfully!",
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
//                 });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Could not delete Tutorial with id=" + id,
//             });
//         });
// };

// // Delete all Tutorials from the database.
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Tutorial.destroy({
//         where: { id: id },
//     })
//         .then((num) => {
//             if (num == 1) {
//                 res.send({
//                     message: "Tutorial was deleted successfully!",
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
//                 });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Could not delete Tutorial with id=" + id,
//             });
//         });
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//     Tutorial.findAll({ where: { published: true } })
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving tutorials.",
//             });
//         });
// };
