-- Active: 1681708678130@@127.0.0.1@3307@pymesdb
CREATE DATABASE IF NOT EXISTS pymesDB;

USE pymesDB;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    phone VARCHAR(100) DEFAULT NULL,
    salary INT(9) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;

INSERT INTO employees (name, email, phone, salary) VALUES
('John', 'jhon@email.dot', '123456789', 1000),
('Mary', 'mary@email.dot', '987654321', 2000),
('Peter', 'peter@email.dot', '123987456', 3000),
('Susan', 'susan@email.dot', '413415351', 4000);