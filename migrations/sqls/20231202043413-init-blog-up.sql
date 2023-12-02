/* Replace with your SQL commands */
CREATE TABLE blog (
    "id" SERIAL PRIMARY KEY,
    "post" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status" VARCHAR(320) NOT NULL
);