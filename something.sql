DROP SCHEMA IF EXISTS artemis;
CREATE SCHEMA artemis;
USE artemis;

DROP TABLE grades;
CREATE TABLE grades (
  grade_id INTEGER NOT NULL AUTO_INCREMENT,
  grade_value FLOAT,
  student_id INTEGER NOT NULL,
  course_id INTEGER NOT NULL,
  PRIMARY KEY (grade_id)
);