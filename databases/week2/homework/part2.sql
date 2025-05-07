-- Part 2: School database

CREATE DATABASE school_database;

USE school_database;

CREATE TABLE class (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    begins DATE,
    ends DATE
);

CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(15),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class (id)
);

CREATE INDEX idx_student_name ON student (name);

ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';