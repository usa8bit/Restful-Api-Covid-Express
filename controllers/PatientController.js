// import Model Patient
const Patient = require("../models/Patient")

// buat class PatientController
class PatientController {
    // Get All Resource
    async index(req, res) {
        const patients = await Patient.all();
        const total = patients.length;

        if (patients.length > 0) {
            const data = {
                message: "Get All Resource",
                total: total,
                data: patients
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Data is empty",
            };

            res.status(200).json(data);
        }
    }

    // Add Resource
    async store(req, res) {
        const patient = await Patient.create(req.body);

        const data = {
            message: "Resource is added successfully",
            data: patient
        };

        res.status(201).json(data);
    }

    // Update Resource
    async update(req, res) {
        const {id} = req.params;
        const patient = await Patient.find(id);

        if (patient) {
            const patient = await Patient.update(id, req.body);

            const data = {
                message: "Resource is updated successfully",
                data: patient
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    // Delete Recource
    async destroy(req, res) {
        const {id} = req.params;
        const patient = await Patient.find(id);

        if (patient) {
            await Patient.delete(id);

            const data = {
                message: "Resource is deleted successfully",
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    // Get one Resource
    async show(req, res) {
        const {id} = req.params;
        const patient = await Patient.find(id);

        if (patient) {
            const data = {
                message: "Get Detail Resource",
                data: patient
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    // Search Resource
    async search(req, res) {
        const {name} = req.params;
        const patients = await Patient.search(name);
        
        if (patients) {
            const total = patients.length;
            const data = {
                message: "Get searched resource",
                total: total,
                data: patients
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    // Get Positive Resource
    async positive(req,res) {
        const status = "Positive";
        const patients = await Patient.findByStatus(status);
        
        if (patients) {
            const total = patients.lenght;
            const data = {
                message: "Get positive resource",
                total: total,
                data: patients
            };

            res.status(200).json(data);
        }
    }

    // Get Recovered Resource
    async recovered(req, res) {
        const status = "Recovered";
        const patients = await Patient.findByStatus(status);
        
        if (patients) {
            const total = patients.lenght;
            const data = {
                message: "Get recovered resource",
                total: total,
                data: patients
            };

            res.status(200).json(data);
        }
    }

    // Get Dead Resource
    async dead(req, res) {
        const status = "Dead";
        const patients = await Patient.findByStatus(status);
        
        if (patients) {
            const total = patients.count;
            const data = {
                message: "Get dead resource",
                total: total,
                data: patients
            };

            res.status(200).json(data);
        }
    }
  }
  
  // membuat object PatientController
  const object = new PatientController();
  
  // export object PatientController
  module.exports = object;