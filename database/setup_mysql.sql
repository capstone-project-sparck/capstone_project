-- script for manage the mysql database
-- database
CREATE database IF NOT EXISTS techstars_db;
CREATE USER IF NOT EXISTS 'spark'@'%' IDENTIFIED BY 'spark_dev';
GRANT ALL PRIVILEGES ON techstars_db.* TO 'spark'@'%';