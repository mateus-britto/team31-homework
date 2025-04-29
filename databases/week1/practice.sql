CREATE DATABASE record_company;

use record_company;

CREATE TABLE bands (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE albums (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    release_year INT,
    band_id INT NOT NULL,
    PRIMARY KEY (id),
    Foreign Key (band_id) REFERENCES bands (id)
);

INSERT INTO bands (name) VALUES ("Iron Maiden");

INSERT INTO
    bands (name)
VALUES ("Deuce"),
    ("Avenged Sevenfold"),
    ("Ankor");

SELECT * FROM bands;

SELECT * FROM bands LIMIT 2;

SELECT name FROM bands;

SELECT id as 'ID', name AS "Band Name" FROM bands;

SELECT * FROM bands ORDER BY name;

INSERT INTO
    albums (name, release_year, band_id)
VALUES (
        "The Number of the Beast",
        1985,
        1
    ),
    ("Power Slave", 1984, 1),
    ("Nightmare", 2018, 2),
    ("Nightmare", 2010, 3),
    ("Test", NULL, 3);

SELECT * FROM albums;

SELECT DISTINCT name FROM albums;
/* DISTINCT only gets unique names */

SELECT * FROM albums;

UPDATE albums SET release_year = 1982 WHERE id = 1;

SELECT * FROM albums WHERE release_year < 2000;

SELECT * FROM albums WHERE name LIKE "%er%" OR band_id = 2;
/* Using wildcards to find specific inside the "%" signs */
/* Will find anything that has "er" in it or has the band_id = 2 */

SELECT * FROM albums WHERE release_year = 1984 AND band_id = 1;

SELECT * FROM albums WHERE release_year BETWEEN 2000 AND 2018;

SELECT * FROM albums WHERE release_year IS NULL;

DELETE FROM albums WHERE id = 5;

SELECT * FROM albums;

SELECT * from bands 
INNER JOIN albums ON bands.id = albums.band_id;

SELECT * from bands 
LEFT JOIN albums ON bands.id = albums.band_id;

SELECT * from albums 
RIGHT JOIN bands ON bands.id = albums.band_id;

SELECT AVG(release_year) FROM albums; 

SELECT SUM(release_year) FROM albums;

SELECT band_id, COUNT(band_id) FROM albums GROUP BY band_id;
/* Count the numbers grouped by band_id */

SELECT b.name AS band_name, COUNT(a.id) AS num_albums FROM bands AS b
LEFT JOIN albums AS a ON b.id = a.band_id
WHERE b.name = "Deuce"
GROUP BY b.id
HAVING num_albums = 1; /* HAVING is the same as WHERE but is used after the GROUP BY */
-- This query retrieves a list of band names along with the number of albums each band has.
-- It uses a LEFT JOIN to combine the "bands" table with the "albums" table based on the band ID.
-- The COUNT function is used to count the number of albums for each band, including bands with no albums (resulting in a count of 0).
-- The results are grouped by the band ID to ensure each band is represented once in the output.