// import PatientController
const PatientController = require("../controllers/PatientController")

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Get All Resource
router.get("/patients", PatientController.index);

// Add Resource
router.post("/patients", PatientController.store);

// Update Resource
router.put("/patients/:id", PatientController.update);

// Delete Recource
router.delete("/patients/:id", PatientController.destroy);

// Get One Resource
router.get("/patients/:id", PatientController.show);

// Search Resource
router.get("/patients/search/:name", PatientController.search);

// Get Positive Resource
router.get("/patients/status/positive", PatientController.positive);

// Get Recovered Resource
router.get("/patients/status/recovered", PatientController.recovered);

// Get Dead Resource
router.get("/patients/status/dead", PatientController.dead);

// export router
module.exports = router;