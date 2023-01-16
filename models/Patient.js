// import database
const db = require("../config/database");

// membuat class Patient
class Patient {
    // Get All Resource
    static all() {
        // return Promise Async
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM patients";

            db.query(query, (err, result) => {
                resolve(result);
            });
        });
    }

    // Add Resource
    static async create(data) {
        const id = await new Promise((resolve, reject) => {
            const query = "INSERT INTO patients SET ?";

            db.query(query, data, (err, result) => {
                resolve(result.insertId);
            });
        });

        const patient = this.find(id);
        return patient;
    }
    
    // Update Resource
    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const query = "UPDATE patients SET ? WHERE id = ?";
            
            db.query(query, [data, id], (err, result) => {
                resolve(result);
            });
        });
        
        const patient = this.find(id);
        return patient;
    }

    // Delete Recource
    static async delete(id) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM patients WHERE id = ?";

            db.query(query, id, (err, result) => {
                resolve(result);
            });
        });
    }

    // Find Resource by id
    static async find(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM patients WHERE id = ?";

            db.query(query, id, (err, result) => {
                const [patient] = result;
                resolve(patient);
            });
        });
    }

    // Search Resource by name
    static async search(name) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM patients WHERE name LIKE '%'?'%'";

            db.query(query, name, (err, result) => {
                resolve(result);
            });
        });
    }

    // Get Resource by status
    static async findByStatus(status) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM patients WHERE status LIKE ?";

            db.query(query, status, (err, result) => {
                resolve(result);
            });
        });
    }
  }
  
  // export class Patient
  module.exports = Patient;