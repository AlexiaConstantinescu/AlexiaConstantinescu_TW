
const { Op } = require("sequelize");
const Employee = require("../models/employee");

const router = require("express").Router();

router
  .route("/employees")
  .get(async (req, res) => {
    // get all
    try {
      const employees = await Employee.findAll({});
      return res.status(200).json(employees);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    // create
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(200).json(newEmployee);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

router
  .route("/employees/:id")
  .get(async (req, res) => {
    // get by id
    try {
      const employee = await Employee.findOne({
        where: { id: req.params.id },
      });
      if (employee) {
        return res.status(200).json(employee);
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} does not exist` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        const updated = await employee.update(req.body);
        return res.status(200).json(updated);
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} does not exist` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        await employee.destroy();
        return res
          .status(200)
          .json({ message: `Employee with id ${req.params.id} has been deleted` });
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} does not exist` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = router;
