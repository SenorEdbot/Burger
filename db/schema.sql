DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(225) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Cheeseburger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Mushroom Swiss Burger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Black Bean Burger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Grilled Chicken Sandwich", FALSE);