-- script for manage the mysqll database
-- database
CREATE database IF NOT EXISTS techstars_db;
CREATE USER IF NOT EXISTS 'spark'@'localhost' IDENTIFIED BY 'spark';
GRANT ALL PRIVILEGES ON techstars_db.* TO 'spark'@'localhost';
GRANT SELECT ON performance_schema.* TO 'spark'@'localhost';