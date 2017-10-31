DROP DATABASE IF EXISTS project2_db;

CREATE DATABASE project2_db;

USE project2_db;

CREATE TABLE userInfo (
  id int NOT NULL AUTO_INCREMENT,
	userName varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
	userWeight int (3),
	PRIMARY KEY (id)
);

CREATE TABLE userWorkout (
  id int NOT NULL AUTO_INCREMENT,
	userName varchar(255) NOT NULL,
  excerciseName varchar(255) NOT NULL,
  weightAmount int (3),
  repetitions int (3),
  sets int (3),
  totalReps int (4),
	workoutTime DATETIME NOT NULL,
	PRIMARY KEY (id)
);
