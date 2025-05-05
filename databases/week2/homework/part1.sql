-- Part 1: Working with tasks

CREATE DATABASE tasks;

USE tasks;

CREATE TABLE task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP, -- The 'created' column stores the timestamp when a row is first inserted, defaulting to the current time.
    updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- The 'updated' column stores the timestamp of the last update to the row, automatically updating to the current time whenever the row is modified.
    due_date DATETIME,
    status_id INT,
    user_id INT
);

-- Insert a task into the task table
INSERT INTO task (title, description, due_date, status_id, user_id)
VALUES ('Complete Homework', 'Finish the SQL homework for week 2', '2025-06-01 10:00:00', 1, 101);

SELECT * FROM task;

-- Change the title of a task
UPDATE task
SET title = "Workout"
WHERE id = 1;

-- Change the description of a task
UPDATE task
set description = "Go to the Gym"
WHERE id = 1;

-- Change a task due date
UPDATE task
SET due_date = "2025-06-06 12:00:00"
WHERE id = 1;

-- Change a task status
UPDATE task
SET status_id = 2
WHERE id = 1;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 1;

-- Delete a task
DELETE from task
WHERE id = 1;

SELECT * FROM task;

-- DROP DATABASE tasks;