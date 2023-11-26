/* Replace with your SQL commands */
CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
    "fist_name" VARCHAR(255) NOT NULL,
    "middle_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "password" VARCHAR(320) NOT NULL
)