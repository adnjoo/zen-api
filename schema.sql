-- Seeing as we will be testing out this script alot we can destroy the db before creating everything again
DROP DATABASE IF EXISTS zendb;

-- Create the db
CREATE DATABASE zendb;

-- Move into the db
\c zendb 
-- Create our table if it doesn't already exist
CREATE TABLE IF NOT EXISTS koans (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(9000)
);

-- Changes the owner of the table to postgres which is the default when installing postgres
ALTER TABLE
    koans OWNER TO postgres;