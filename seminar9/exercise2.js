
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Employee = sequelize.define(
    "Employee",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            // allowNull: false, - defaults to true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            },
        },
        birthYear: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1900,
            },
        },
        salary: {
            type: DataTypes.INTEGER,
            defaultValue: 0,       // valoare default
            validate: {
                min: 0,            // valoare minimă
            },
        },
    }
    // { tableName: "Employees" }
);

module.exports = Employee;
