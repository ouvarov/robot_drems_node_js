CREATE TABLE parent_table (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL

);

CREATE TABLE child_table (
   id SERIAL PRIMARY KEY,
   parent_id INT,
   description VARCHAR(255),
   FOREIGN KEY (parent_id) REFERENCES parent_table(id) ON DELETE CASCADE
);

INSERT INTO parent_table VALUES (1, 'some_name');
INSERT INTO child_table VALUES (1, 1, 'some description');
DELETE FROM parent_table WHERE id = 1;
